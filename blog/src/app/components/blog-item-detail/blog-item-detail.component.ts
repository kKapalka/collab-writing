import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';
import {group} from '@angular/animations';

@Component({
    selector: 'app-blog-item-detail',
    templateUrl: './blog-item-detail.component.html',
    styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

    id;
    item:any = {};
    comments;

    constructor(private dataServ: DataServiceService, private route: ActivatedRoute, private router: Router) {
    }

    goToCommentCreate(username) {
        localStorage.setItem('title',this.item.title);
        this.router.navigate(['/blog/comment/create']);
    }
  checkStorageForUsername(){
    return Boolean(localStorage.getItem('username'));
  }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']
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
        let currentUsername=localStorage.getItem('username');
        if(currentUsername==null){
          currentUsername='';
        }
        this.dataServ.getComments(this.id,currentUsername).subscribe(result => {
            this.comments = result;
            console.log(result);
        });
    }

}
