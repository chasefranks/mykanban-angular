import { Pipe, PipeTransform } from '@angular/core';
import { UserStory } from './user-story'

@Pipe({
  name: 'kanbanState'
})
export class KanbanStatePipe implements PipeTransform {

  transform(userStories: UserStory[], args?: any): any {
    return userStories.filter(u => u.state.toLowerCase() === args.toLowerCase());
  }

}
