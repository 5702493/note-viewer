import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { NoteModel } from '../note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note$?: Observable<NoteModel>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.note$ = this.route.data.pipe(map((data: Data): any => data.note));
  }
}
