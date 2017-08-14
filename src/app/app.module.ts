import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragulaSampleComponent } from './dragula-sample.component';

import { DragulaModule } from 'ng2-dragula'
import { DragulaService } from 'ng2-dragula';
import { UserStoryService } from './userstory.service'
import { TodoComponent } from './todo/todo.component';
import { KanbanComponent } from './kanban/kanban.component'


@NgModule({
  declarations: [
    AppComponent,
    DragulaSampleComponent,
    TodoComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [
    DragulaService,
    UserStoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
