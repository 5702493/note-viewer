import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { NoteModel } from '../note.model';

@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.scss']
})
export class WriteNoteComponent implements OnInit {
  noteForm: FormGroup = new FormGroup({
    titleInput: new FormControl(),
    contentText: new FormControl()
  });

  constructor(
    private router: Router,
    private service: DataService
  ) { }

  ngOnInit(): void { }

  onSubmit(form: FormGroup): void {
    const value: any = form.value;
    const data: NoteModel[] = this.service.data$.getValue();
    const noteId: string = new Date().getTime().toString();
    data.push({
      content: value.contentText,
      id: noteId,
      title: value.titleInput
    });
    this.service.data$.next(data);
    this.router.navigate(['/note', noteId]);
  }
}
