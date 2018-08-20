import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPinnedComponent } from './card-pinned.component';

describe('CardPinnedComponent', () => {
  let component: CardPinnedComponent;
  let fixture: ComponentFixture<CardPinnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPinnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
