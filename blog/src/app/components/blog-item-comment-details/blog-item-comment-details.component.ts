import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
    selector: 'app-blog-item-comment-details',
    templateUrl: './blog-item-comment-details.component.html',
    styleUrls: ['./blog-item-comment-details.component.css']
})
export class BlogItemCommentDetailsComponent implements OnInit {

    @Input('username') username: string;
    @Input('text') text: string;
    @Input('id') id;
    @Input('approved') approved;

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
    }

    approve() {
        this.data.approveComment(this.id, localStorage.getItem('username')).subscribe(res => {
            console.log(res);
            this.approved = true;
        }, reason => {
            console.log(reason);
            console.log(this.id);
            console.log(localStorage.getItem('username'));
        });
    }
}
