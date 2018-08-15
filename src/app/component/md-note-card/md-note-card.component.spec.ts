import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdNoteCardComponent } from './md-note-card.component';

describe('MdNoteCardComponent', () => {
  let component: MdNoteCardComponent;
  let fixture: ComponentFixture<MdNoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdNoteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdNoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
