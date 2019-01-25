import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemIssueAddComponent } from './blog-item-issue-add.component';

describe('BlogItemIssueAddComponent', () => {
  let component: BlogItemIssueAddComponent;
  let fixture: ComponentFixture<BlogItemIssueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemIssueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemIssueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
