import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemNoteAddComponent } from './blog-item-note-add.component';

describe('BlogItemNoteAddComponent', () => {
  let component: BlogItemNoteAddComponent;
  let fixture: ComponentFixture<BlogItemNoteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemNoteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemNoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
