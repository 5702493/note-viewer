import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { NoteModel } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$: BehaviorSubject<NoteModel[]> = new BehaviorSubject([{
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tristique dui. Pellentesque hendrerit luctus tortor, ac ornare justo gravida sollicitudin. Morbi posuere tincidunt interdum. Aliquam libero purus, porttitor sed molestie id, ultricies eu lorem. Aliquam efficitur orci quis magna dignissim bibendum.\n\nNulla malesuada magna velit, vel accumsan ex accumsan ac. Nulla eu ligula vitae libero venenatis pretium sit amet sed ex.\n\nCras posuere consequat urna vitae vehicula. Sed pharetra lobortis metus et interdum.\n\nCras gravida orci sed ipsum consequat, quis fringilla diam pharetra. Fusce vel vulputate tortor, sit amet tristique lectus. Phasellus eu lacus ac ipsum tincidunt pulvinar vel sit amet elit. Aenean nisl eros, lacinia vitae dictum non, fringilla et sapien. Quisque suscipit, lectus vehicula fermentum aliquet, erat leo venenatis ligula, at aliquet massa est sit amet lorem.',
    id: '1642760120157',
    title: 'Заметка 1'
  }, {
    content: 'Cras vel velit maximus, iaculis lorem non, semper elit.\n\nAliquam dapibus erat ut tortor fringilla, a interdum quam maximus.\nSed feugiat suscipit libero, at tempus nisi consequat nec.\n\nNam eu metus id eros sodales dapibus.',
    id: '1642773432538',
    title: 'Заметка 2'
  }, {
    content: 'Mauris viverra hendrerit risus, sit amet ultrices lorem pharetra et. Praesent in porttitor lorem.\nVestibulum ut magna sed ante facilisis ultrices quis at ligula. Proin eget magna a massa cursus dapibus ut ac justo.',
    id: '1642775522131',
    title: 'Заметка 3'
  }]);

  constructor() { }
}
