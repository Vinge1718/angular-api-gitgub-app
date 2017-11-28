import { Component, Input, OnInit } from '@angular/core';
import { userData } from './user';
import { apiKey } from './env';
import { GithubService } from './github.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userData: string;

  public gitHubInfor: string;

  public reposUrl: string;

  public returnedUserRepos: any = null;

  public returnedUserData: any = null;

  apiKey: string = apiKey.inputKey;

  searchInput(userToSearch: string){
    this.userData = userToSearch;
    this.gitHubInfor = "https://api.github.com/users/" + this.userData + "?access_token=" + this.apiKey;
    this.getUsers();
    this.reposUrl = "https://api.github.com/users/" + this.userData +"/repos?access_token="+this.apiKey;
    this.getRepos();
  }

  constructor(private gitHubService: GithubService) { }

  getRepos(){
    this.gitHubService.getRepos(this.reposUrl)
    .subscribe(resUserRepos => {
      this.returnedUserRepos =resUserRepos;
      console.log(this.returnedUserRepos);
    },
    (errors:HttpErrorResponse) =>{
      if(errors.error instanceof Error){
        console.log("A client-side error occured. Check you input query for spelling errors");
      }else{
        console.log("A server-side error occured. Try again later.")
      }
    }
  );
  }

  getUsers() {
    this.gitHubService.getUsers(this.gitHubInfor)
    .subscribe(resUserData => {
      this.returnedUserData = resUserData;
      console.log(this.returnedUserData);
    },
    (errors:HttpErrorResponse) =>{
      if (errors.error instanceof Error){
        console.log("A client-side error occured. Check you input query.");
      } else{
        console.log("A server-side error occured. Try again later.")
      }
    }
  );
  }

  /*the service is innitialised in the clicck function instead of the ngOnInit function because I
  want the service to be triggered by the click function not the page loading!!! Olllait! hehe
  */

  ngOnInit() {
  }

}
