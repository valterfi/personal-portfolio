import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { RootObject } from '../github-dto'

@Component({
  selector: 'app-repo-grid',
  templateUrl: './repo-grid.component.html',
  styleUrls: ['./repo-grid.component.scss']
})
export class RepoGridComponent implements OnInit {

  rootObject: RootObject;

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit(): void {
    this.githubApiService.getReposList().subscribe(data => {
      this.rootObject = data;
      console.log(this.rootObject[0]);
    });
  }

}
