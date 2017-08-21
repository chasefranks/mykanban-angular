import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula'

import { UserStoryService } from '../userstory.service'
import { UserStory } from '../user-story'

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  userStories: UserStory[]
  userStoryService: UserStoryService
  dragulaService: DragulaService

  constructor(userStoryService: UserStoryService, dragulaService: DragulaService) {
    this.dragulaService = dragulaService
    this.userStoryService = userStoryService
  }

  // called after constructor
  ngOnInit() {
    // subscribe to the drop event
    this.dragulaService.drop
      .subscribe((dropEvent) => {
        this.updateUserStoryState(dropEvent[1].id, dropEvent[2].id)
      })

    console.log('calling getUserStories()')
    this.userStoryService.getUserStories()
      .subscribe(stories => {
        console.log(`${stories.length} stories received`)
        this.userStories = stories
      })
  }

  getUserStoriesInState(state: string): UserStory[] {
    console.log(`getting user stories in state ${state}`)
    return this.userStories.filter(u => u.state == state)
  }

  updateUserStoryState(id: string, newState: string) {
    // update view
    let userStory: UserStory = this.userStories.find(u => u.id == id)
    userStory.state = newState

    // update backend
    this.userStoryService.updateUserStory(id, userStory)
      .subscribe(u => console.log(u))
  }

}
