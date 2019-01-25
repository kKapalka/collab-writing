import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
    selector: 'app-blog-item-note-details',
    templateUrl: './blog-item-note-details.component.html',
    styleUrls: ['./blog-item-note-details.component.css']
})
export class BlogItemNoteDetailsComponent implements OnInit {
    @Input('username') username: string;
    @Input('text') text: string;
    @Input('id') id;
    @Input('approved') approved;
    @Input('description') description;
    @Input('assignedUsername') assignedUsername;
    @Input('status') status;
    @Input('title') title;

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
    }

    approve() {
        this.data.approveNote(this.id, localStorage.getItem('username')).subscribe(res => {
            console.log(res);
            this.approved = true;
        }, reason => {
            console.log(reason);
            console.log(this.id);
            console.log(localStorage.getItem('username'));
        });
    }


}
