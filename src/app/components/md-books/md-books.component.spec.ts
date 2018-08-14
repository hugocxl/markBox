import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBooksComponent } from './md-books.component';

describe('MdBooksComponent', () => {
  let component: MdBooksComponent;
  let fixture: ComponentFixture<MdBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
