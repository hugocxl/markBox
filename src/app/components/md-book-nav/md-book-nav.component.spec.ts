import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBookNavComponent } from './md-book-nav.component';

describe('MdBookNavComponent', () => {
  let component: MdBookNavComponent;
  let fixture: ComponentFixture<MdBookNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdBookNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdBookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
