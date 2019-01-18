import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentAddComponent } from './blog-comment-add.component';

describe('BlogCommentAddComponent', () => {
  let component: BlogCommentAddComponent;
  let fixture: ComponentFixture<BlogCommentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
