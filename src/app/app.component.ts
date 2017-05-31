import { Component } from '@angular/core';
import { GithubService } from "app/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: object;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {

  }

  search() {

    this._githubService.setUser(this.username);

    this._githubService.getUser()
      .subscribe(res => this.user = res);

    this._githubService.getUserRepos()
      .subscribe(res => this.repos = res);

  }

}
