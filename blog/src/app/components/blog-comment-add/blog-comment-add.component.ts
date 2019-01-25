import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DataServiceService} from '../../services/data-service.service';

@Component({
    selector: 'app-blog-comment-add',
    templateUrl: './blog-comment-add.component.html',
    styleUrls: ['./blog-comment-add.component.css']
})

export class BlogCommentAddComponent implements OnInit {

    item = {
        authorName: localStorage.getItem('username'),
        storyTitle: localStorage.getItem('title'),
        commentText: ''
    };

    constructor(private data: DataServiceService, private _location: Location) {
    }

    ngOnInit() {

    };

    setData(item) {
        this.data.addComment(item).subscribe();
        this._location.back();
    }
}

