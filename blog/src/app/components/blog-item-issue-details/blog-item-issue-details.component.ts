import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-blog-item-issue-details',
  templateUrl: './blog-item-issue-details.component.html',
  styleUrls: ['./blog-item-issue-details.component.css']
})
export class BlogItemIssueDetailsComponent implements OnInit {
//[text]="item.description" [id]="item.issueId" [username]="item.authorName" [assignedUsername]="item.assignedAuthorName" [issueStatus]="item.issueStatus" [approved]="item.approved" [issueTittle]="item.issueTitle"
    @Input('username') username: string;
    @Input('text') text: string;
    @Input('id') id;
    @Input('approved') approved;
    @Input('description') description;
        @Input('assignedUsername') assignedUsername;
        @Input('status') status;
        @Input('title') title;

    approve() {
        this.data.approveIssue(this.id, localStorage.getItem('username')).subscribe(res => {
            console.log(res);
            this.approved = true;
        }, reason => {
            console.log(reason);
            console.log(this.id);
            console.log(localStorage.getItem('username'));
        });
    }


    constructor(private data: DataServiceService) {
    }

  ngOnInit() {
  }

}
