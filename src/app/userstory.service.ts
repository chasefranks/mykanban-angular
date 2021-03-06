import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { UserStory } from './user-story'
import { Label } from './label'

import { environment } from '../environments/environment';

@Injectable()
export class UserStoryService {

  // web service api endpoint
  apiEndpoint: string = environment.kanbanApi

  constructor(private http: Http) { }

  getUserStories(): Observable<UserStory[]> {
    console.log('service getUserStories()')
    const url = `${this.apiEndpoint}/userStory`
    return this.http.get(url)
      .map(response => response.json() as UserStory[])

  }

  updateUserStory(id: string, userStory: UserStory): Observable<UserStory> {
    const url = `${this.apiEndpoint}/userStory/${id}`
    console.log(url)

    return this.http.put(url, userStory)
      .map(response => response.json() as UserStory)
  }

}
