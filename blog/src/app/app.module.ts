import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {BlogItemDetailComponent} from './components/blog-item-detail/blog-item-detail.component';
import {SummaryPipe} from './summary.pipe';
import {FilterPipe} from './filter.pipe';
import {DataServiceService} from './services/data-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {TextFormatDirective} from './directives/text-format.directive';
import {BlogCreateComponent} from './components/blog-create/blog-create.component';
import {AdminGuard} from './services/admin-guard.guard';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import {AuthService} from './services/auth.service';
import {SignupComponent} from './components/signup/signup.component';
import {BlogStoryAddComponent} from './components/blog-story-add/blog-story-add.component';
import {BlogCommentAddComponent} from './components/blog-comment-add/blog-comment-add.component';
import {BlogItemCommentDetailsComponent} from './components/blog-item-comment-details/blog-item-comment-details.component';
import {BlogItemEntryDetailsComponent} from './components/blog-item-entry-details/blog-item-entry-details.component';
import {BlogItemNoteDetailsComponent} from './components/blog-item-note-details/blog-item-note-details.component';
import {BlogItemIssueDetailsComponent} from './components/blog-item-issue-details/blog-item-issue-details.component';
import { BlogItemIssueAddComponent } from './components/blog-item-issue-add/blog-item-issue-add.component';
import { BlogItemNoteAddComponent } from './components/blog-item-note-add/blog-item-note-add.component';
import { BlogItemEntryAddComponent } from './components/blog-item-entry-add/blog-item-entry-add.component';


// import { AdminProfileComponent } from './components/';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'quiz',
        component: QuizComponent,
        canActivate: [AdminGuard],
        data: {state: 'admin'}
    },
    {
        path: 'blog',
        component: BlogHomeComponent
    },
    {
        path: 'blog/details/:id',
        component: BlogItemDetailComponent
    },
    {
        path: 'blog/create',
        component: BlogCreateComponent,
    },
    {
        path: 'blog/comment/create',
        component: BlogCommentAddComponent
    },
    {
        path: 'blog/issue/create',
        component: BlogItemIssueAddComponent
    },
    {
        path: 'blog/note/create',
        component: BlogItemNoteAddComponent
    },
    {
      path: 'blog/entry/create',
      component: BlogItemEntryAddComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },

];

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        QuizComponent,
        HomeComponent,
        AppNavbarComponent,
        BlogComponent,
        BlogItemComponent,
        BlogItemTextComponent,
        BlogItemImageComponent,
        BlogItemDetailComponent,
        SummaryPipe,
        FilterPipe,
        SearchBarComponent,
        BlogHomeComponent,
        TextFormatDirective,
        BlogCreateComponent,
        LoginComponent,
        SignupComponent,
        BlogStoryAddComponent,
        BlogCommentAddComponent,
        BlogItemCommentDetailsComponent,
        BlogItemEntryDetailsComponent,
        BlogItemNoteDetailsComponent,
        BlogItemIssueDetailsComponent,
        BlogItemIssueAddComponent,
        BlogItemNoteAddComponent,
        BlogItemEntryAddComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        [AuthService],
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
