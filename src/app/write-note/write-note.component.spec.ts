import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { WriteNoteComponent } from './write-note.component';

describe('WriteNoteComponent', (): void => {
  let component: WriteNoteComponent;
  let fixture: ComponentFixture<WriteNoteComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [WriteNoteComponent]
    }).compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(WriteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
