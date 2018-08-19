import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedPageComponent } from './pinned-page.component';

describe('PinnedPageComponent', () => {
  let component: PinnedPageComponent;
  let fixture: ComponentFixture<PinnedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
