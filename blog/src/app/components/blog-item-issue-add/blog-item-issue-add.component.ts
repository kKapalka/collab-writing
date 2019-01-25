import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-item-issue-add',
  templateUrl: './blog-item-issue-add.component.html',
  styleUrls: ['./blog-item-issue-add.component.css']
})
export class BlogItemIssueAddComponent implements OnInit {

    item = {
        authorName: localStorage.getItem('username'),
        storyTitle: localStorage.getItem('title'),
        issueTitle: '',
        issueStatus: 'OPEN',
        description: '',
        assignedAuthorName: localStorage.getItem('username'),
    };

    constructor(private data: DataServiceService, private _location: Location) {
    }

    ngOnInit() {

    };

    setData(item) {
        this.data.addIssue(item,localStorage.getItem('username')).subscribe();
        this._location.back();
    }

}
