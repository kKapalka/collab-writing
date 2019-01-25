import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService {

    private url = 'http://localhost:4444';

    constructor(private http: HttpClient) {

    }

    addComment(data) {
        return this.http.post(this.url + '/comment/save', data).pipe();
    }

    get(id) {
        return this.http.get(this.url + '/story/all').pipe();
    }

    getAll() {
        return this.http.get(this.url + '/story/all')
            .pipe(
                map((x: any[]) => x)
            );
    }

    addPost(data, username) {
        return this.http.post(this.url + '/story/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    }

    addIssue(data, username) {
        return this.http.post(this.url + '/issue/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    }

    addNote(data, username) {
        return this.http.post(this.url + '/note/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    }

    addEntry(data, username) {
        return this.http.post(this.url + '/entry/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    }

    approveComment(id, username) {
        return this.http.post(this.url + '/comment/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    }

    approveEntry(id, username) {
        return this.http.post(this.url + '/entry/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    }

    approveIssue(id, username) {
        return this.http.post(this.url + '/issue/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    }

    approveNote(id, username) {
        return this.http.post(this.url + '/note/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    }

    getComments(id, username) {
        return this.http.get(this.url + '/comment/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    }

    getEntries(id, username) {
        return this.http.get(this.url + '/entry/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    }


    getNotes(id, username) {
        return this.http.get(this.url + '/note/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    }

    getIssues(id, username) {
        return this.http.get(this.url + '/issue/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    }


}
