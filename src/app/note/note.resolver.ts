import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { DataService } from '../data.service';
import { NoteModel } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteResolver implements Resolve<NoteModel> {
  constructor(
    private router: Router,
    private service: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<NoteModel> {
    const id: string = route.paramMap.get('id')!;
    return this.service.data$
      .pipe(take(1), mergeMap((data: NoteModel[]): Observable<NoteModel> => {
        const note: NoteModel | undefined = data.find((item: NoteModel): boolean => item.id === id);
        if (note) {
          note.content = note.content.split('\n').join('<br>');
          return of(note);
        }
        this.router.navigate(['/']);
        return EMPTY;
      }));
  }
}
