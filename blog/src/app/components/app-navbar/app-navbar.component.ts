import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {JwtHelper} from "angular2-jwt";

@Component({
    selector: 'app-app-navbar',
    templateUrl: './app-navbar.component.html',
    styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

    constructor(public authService: AuthService,
                private router: Router) {
    }

    isLogged() {
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return !(jwtHelper.isTokenExpired(token));
    }

    logIn(){
        this.router.navigate(['/login']);
    }

    register(){
        this.router.navigate(['/signup']);
    }

    logOut() {
        this.authService.logout();
        // .subscribe(() => {
        //     this.router.navigate(['/home']);
        // });
    }

    ngOnInit() {
    }

}
