import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WriteNoteComponent } from './write-note/write-note.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WriteNoteComponent
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
