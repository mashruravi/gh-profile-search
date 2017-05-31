import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private clientid: string;
  private clientsecret: string;
  private url: string;

  constructor(private _http: Http) {

    // Load client id and client secret from secret.json
    this._http.get('assets/secret.json')
      .map((res) => res.json())
      .subscribe((data) => {
        this.clientid = data.clientid;
        this.clientsecret = data.clientsecret;
      });
  }

  private getUrl(): string {
    return 'http://api.github.com/users/' + this.username
      + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
  }

  private getRepoUrl(): string {
    return 'http://api.github.com/users/' + this.username + '/repos'
      + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
  }

  setUser(username: string) {
    this.username = username;
  }

  getUser() {
    let url = this.getUrl();
    return this._http.get(url)
      .map(res => res.json());
  }

  getUserRepos() {
    let url = this.getRepoUrl();
    return this._http.get(url)
      .map(res => res.json());
  }

}
