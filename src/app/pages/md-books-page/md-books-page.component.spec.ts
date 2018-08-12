import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBooksPageComponent } from './md-books-page.component';

describe('MdBooksPageComponent', () => {
  let component: MdBooksPageComponent;
  let fixture: ComponentFixture<MdBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
