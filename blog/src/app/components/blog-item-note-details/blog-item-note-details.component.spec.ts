import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemNoteDetailsComponent } from './blog-item-note-details.component';

describe('BlogItemNoteDetailsComponent', () => {
  let component: BlogItemNoteDetailsComponent;
  let fixture: ComponentFixture<BlogItemNoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemNoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemNoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
