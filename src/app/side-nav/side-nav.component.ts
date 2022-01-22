import { BehaviorSubject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { NoteModel } from '../note.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  data$?: BehaviorSubject<NoteModel[]>;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.data$ = this.service.data$;
  }
}
