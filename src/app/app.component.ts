import { Component, Input, OnInit } from '@angular/core';
import { userData } from './user';
import { apiKey } from './env';
import {Headers, RequestOptions} from '@angular/http';
import { GithubService } from './github.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userData: string;

  public gitHubInfor: string;

  public returnedUserData: any = null;

  apiKey: string = apiKey.inputKey;

  searchInput(userToSearch: string){
    this.userData = userToSearch;
    this.gitHubInfor = "https://api.github.com/users/" + this.userData + "?access_token=" + this.apiKey;
    this.getUsers();
  }

  constructor(private gitHubService: GithubService) { }


  getUsers() {
    this.gitHubService.getUsers(this.gitHubInfor)
    .subscribe(resUserData => {
      this.returnedUserData = resUserData;
      console.log(this.returnedUserData);
    });
  }

  ngOnInit() {
  }

}
