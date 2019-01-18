import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {DataServiceService} from "../../services/data-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  credentials = {
    login: '',
    email: '',
    password: '',
    matchingPassword: ''
  };

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
        return this.authService.authenticate(this.credentials).subscribe((result) => {
            this.router.navigate(['/']);
        });
    });
  }


  ngOnInit() {
  }

}
