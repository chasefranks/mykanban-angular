import { Injectable } from '@angular/core';

import { UserStory } from './user-story'
import { Label } from './label'

@Injectable()
export class UserStoryService {

  userStories: UserStory[]

  constructor() {
    this.userStories = [
      new UserStory('1', 'Create Angular Project', 'some description', 'in-dev', new Array(new Label('userstory', 'blue'))),
      new UserStory('2', 'Install ng-bootstrap', 'some description', 'in-dev', new Array(new Label('userstory', 'blue'))),
      new UserStory('3', 'Find Splash Picture', 'some description', 'analysis', new Array(new Label('spike', 'green'))),
      new UserStory('4', 'Fix Build Issue', 'some description', 'ready-for-dev', new Array(new Label('bugfix', 'yellow'))),
      new UserStory('5', 'Console Errors in Chrome', 'some description', 'deployed', new Array(new Label('bugfix', 'yellow'))),
      new UserStory('6', 'title 1', 'Create Starter Component', 'deployed', new Array(new Label('userstory', 'blue')))
    ]
  }

  getUserStories(): UserStory[] {
    return this.userStories
  }

  updateUserStory(id: string, userStory: UserStory) {

    // this should be a pointer to the found UserStory
    var found = this.userStories.find(u => u.id == id)

    // copy fields
    found.title = userStory.title
    found.description = userStory.description
    found.state = userStory.state
    found.labels = userStory.labels

  }

  svcupdateUserStoryState(id: string, newState: string) {
    this.userStories.find(u => u.id == id)
      .state = newState
  }

}
