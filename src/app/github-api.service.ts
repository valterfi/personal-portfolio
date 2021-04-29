import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './github-dto'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private baseURL = "https://api.github.com/users/valterfi/repos";

  constructor(private httpClient: HttpClient) { }  

  getReposList(): Observable<RootObject>{
    return this.httpClient.get<RootObject>(`${this.baseURL}`);
  }
}
