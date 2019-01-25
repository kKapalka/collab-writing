import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemEntryAddComponent } from './blog-item-entry-add.component';

describe('BlogItemEntryAddComponent', () => {
  let component: BlogItemEntryAddComponent;
  let fixture: ComponentFixture<BlogItemEntryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemEntryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemEntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
