import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStoryAddComponent } from './blog-story-add.component';

describe('BlogStoryAddComponent', () => {
  let component: BlogStoryAddComponent;
  let fixture: ComponentFixture<BlogStoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
