import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
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
  loginUrl :string = "http://localhost:8080/login";
  constructor(public http: HttpClient){}

  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = true;
        this.http.post<User>(this.loginUrl,credentials)
         .subscribe(user => {
               this.currentUser = user;
               access = true;
             observer.next(access);
             observer.complete();
             },
           err => {
             this.handleError<User>(`getHero id=`)
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
