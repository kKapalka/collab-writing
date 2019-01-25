import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';
import {group} from '@angular/animations';

import './blog-item-detail.component.css';

@Component({
    selector: 'app-blog-item-detail',
    templateUrl: './blog-item-detail.component.html',
    styleUrls: ['./blog-item-detail.component.css']

})

export class BlogItemDetailComponent implements OnInit {

    id;
    item: any = {};
    comments;
    issues;
    notes;
    entries;

    constructor(private dataServ: DataServiceService, private route: ActivatedRoute, private router: Router) {
    }

    goToCommentCreate(username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/comment/create']);
    }
    goToIssueCreate(username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/issue/create']);
    }
    goToNoteCreate(username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/note/create']);
    }

    goToEntryCreate(username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/entry/create']);
    }

    checkStorageForUsername() {
        return Boolean(localStorage.getItem('username'));
    }

    currentUser(){
        return this.checkStorageForUsername() ? localStorage.getItem('username') : '';
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.dataServ.get(this.id)
            .subscribe(result => {
                let res: any = result;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].storyId == this.id) {
                        this.item = res[i];
                        break;
                    }
                }
                // this.item = result;
            });
        let currentUsername = localStorage.getItem('username');
        if (currentUsername == null) {
            currentUsername = '';
        }
        this.dataServ.getComments(this.id, currentUsername).subscribe(result => {
            this.comments = result;
            console.log(result);
        });

        this.dataServ.getIssues(this.id, currentUsername).subscribe(result => {
            this.issues = result;
            console.log(result);
        });

        this.dataServ.getNotes(this.id, currentUsername).subscribe(result => {
            this.notes = result;
            console.log(result);
        });

        this.dataServ.getEntries(this.id, currentUsername).subscribe(result => {
            this.entries = result;
            console.log(result);
        });

    }
}
