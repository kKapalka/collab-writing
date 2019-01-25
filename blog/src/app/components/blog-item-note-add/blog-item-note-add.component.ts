import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-blog-item-note-add',
    templateUrl: './blog-item-note-add.component.html',
    styleUrls: ['./blog-item-note-add.component.css']
})
export class BlogItemNoteAddComponent implements OnInit {


    item = {
        authorName: localStorage.getItem('username'),
        storyTitle: localStorage.getItem('title'),
        issueTitle: '',
        issueStatus: 'OPEN',
        description: '',
        assignedAuthorName: localStorage.getItem('username'),
        noteData: '',
    };


    constructor(private data: DataServiceService, private _location: Location) {
    }

    ngOnInit() {
    }

    setData(item) {
        this.data.addNote(item, localStorage.getItem('username')).subscribe();
        this._location.back();
    }
}
