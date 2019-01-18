import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemCommentDetailsComponent } from './blog-item-comment-details.component';

describe('BlogItemCommentDetailsComponent', () => {
  let component: BlogItemCommentDetailsComponent;
  let fixture: ComponentFixture<BlogItemCommentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemCommentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemCommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
