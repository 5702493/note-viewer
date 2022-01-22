import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NoteResolver } from './note.resolver';

describe('NoteResolver', (): void => {
  let resolver: NoteResolver;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    resolver = TestBed.inject(NoteResolver);
  });

  it('should be created', (): void => {
    expect(resolver).toBeTruthy();
  });
});
