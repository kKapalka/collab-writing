import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  item = {
    title: '',
  };

  constructor(private data: DataServiceService, private _location: Location) {
  }

  ngOnInit() {

  };

  setData(item){
    this.data.addPost(item,localStorage.getItem('username')).subscribe();
    this._location.back();
  }
}
