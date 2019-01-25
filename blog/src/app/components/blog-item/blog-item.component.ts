import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input('image') image: string;
  @Input('text') text: string;
  @Input('id') id;
  @Input('isModerator') isModerator:boolean;
  constructor() { }

  ngOnInit() {
  }
  getModStyle(){
    if(this.isModerator){
      return {
        'background-color':'#ffa'
      }
    }
  }
}
