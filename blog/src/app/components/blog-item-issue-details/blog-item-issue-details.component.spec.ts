import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemIssueDetailsComponent } from './blog-item-issue-details.component';

describe('BlogItemIssueDetailsComponent', () => {
  let component: BlogItemIssueDetailsComponent;
  let fixture: ComponentFixture<BlogItemIssueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemIssueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
