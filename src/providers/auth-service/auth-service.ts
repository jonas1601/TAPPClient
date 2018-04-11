import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {_catch} from "rxjs/operator/catch";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

export class User {
  benutzername: string;
  vorname: string;
  nachname: string;
  id: string;

  constructor(benutzername: string, id: string,vorname: string,nachname:string) {
    this.benutzername = benutzername;
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  loginUrl :string = "localhost:8080/login";
  constructor(private http: HttpClient){}

  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access;
        this.http.get<User>(this.loginUrl,{params:{benutzername:credentials.username,pass:credentials.password}})
         .pipe(
           tap(user => {
               this.currentUser = user;
               access = true;
             }),
           catchError(
             this.handleError<User>(`getHero id=`)
      )

         )

       // let access = (credentials.password === "pass" && credentials.email === "email");
        //this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
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
  private handleError<T> (operation = 'operation', result?: T) {
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
