import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AppComponent } from './app.component';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

//The param variable used is defined in the click function where this function is called-back
//After angular 4 the (where you import "HttpClient" instead of "http" modules) map() function isn't necessary and it will bring up an error

  getUsers(param){
    return this.http.get(param)
  }

  constructor(private http: HttpClient) { }

}
