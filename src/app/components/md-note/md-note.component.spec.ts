import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdNoteComponent } from './md-note.component';

describe('MdNoteComponent', () => {
  let component: MdNoteComponent;
  let fixture: ComponentFixture<MdNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
