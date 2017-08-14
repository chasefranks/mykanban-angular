import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragulaSampleComponent } from './dragula-sample.component';

import { DragulaModule } from 'ng2-dragula'
import { DragulaService } from 'ng2-dragula';
import { TodoComponent } from './todo/todo.component'


@NgModule({
  declarations: [
    AppComponent,
    DragulaSampleComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
