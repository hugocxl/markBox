import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedPreviewComponent } from './pinned-preview.component';

describe('PinnedPreviewComponent', () => {
  let component: PinnedPreviewComponent;
  let fixture: ComponentFixture<PinnedPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
