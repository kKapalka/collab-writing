import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemEntryDetailsComponent } from './blog-item-entry-details.component';

describe('BlogItemEntryDetailsComponent', () => {
  let component: BlogItemEntryDetailsComponent;
  let fixture: ComponentFixture<BlogItemEntryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemEntryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
