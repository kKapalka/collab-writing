import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-blog-item-entry-add',
  templateUrl: './blog-item-entry-add.component.html',
  styleUrls: ['./blog-item-entry-add.component.css']
})
export class BlogItemEntryAddComponent implements OnInit {

  item = {
    authorName: localStorage.getItem('username'),
    storyTitle: localStorage.getItem('title'),
    entryText: ''
  };


  constructor(private data: DataServiceService, private _location: Location) {
  }

  ngOnInit() {
  }

  setData(item) {
    this.data.addEntry(item, localStorage.getItem('username')).subscribe();
    this._location.back();
  }

}
