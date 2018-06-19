import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {of} from "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";
import sha256 from 'crypto-js/sha256';
import {User} from "../../entities/user";


@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  mainUrl: string = "http://ec2-34-219-150-87.us-west-2.compute.amazonaws.com:8080";
  //mainUrl: string = "http://localhost:8080";
  loginUrl: string = this.mainUrl + "/login";
  registerUrl: string = this.mainUrl + "/register";

  constructor(public http: HttpClient) {
  }


  public login(credentials) {
    credentials.password = sha256(credentials.password).toString();
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = true;
        this.http.post<User>(this.loginUrl, credentials)
          .subscribe(user => {
              if (user != null) {
                this.currentUser = user;
                access = true;
              } else {
                access = false;
              }
              observer.next(access);
              observer.complete();
            },
            () => {
              this.handleError<User>("login");
              access = false;
              observer.next(access);
              observer.complete();
            })


        // let access = (credentials.password === "pass" && credentials.email === "email");
        //this.currentUser = new User('Simon', 'saimon@devdactic.com');

      });
    }
  }

  public register(credentials) {


    credentials.password = sha256(credentials.password).toString();
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point store the credentials to your backend!
        this.http.post<User>(this.registerUrl, credentials)
          .subscribe(user => {
            this.currentUser = user;
            observer.next(true);
            observer.complete();

          }, () => {
            observer.next(false);
            observer.complete();
          });
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
