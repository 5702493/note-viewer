import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteComponent } from './note/note.component';
import { NoteResolver } from './note/note.resolver';
import { WriteNoteComponent } from './write-note/write-note.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WriteNoteComponent
}, {
  path: 'note/:id',
  pathMatch: 'full',
  component: NoteComponent,
  resolve: {
    note: NoteResolver
  }
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
