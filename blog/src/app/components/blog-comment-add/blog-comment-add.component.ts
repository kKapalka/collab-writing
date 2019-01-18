import { Component, OnInit } from '@angular/core';
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
        commentText: 'domyslny komentarz'
    };

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {

    };

    setData(item){
        this.data.addComment(item).subscribe();
    }
}

