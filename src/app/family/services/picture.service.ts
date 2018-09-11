import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE_PICTURE_URL = '../assets/allPictures.json';
const BASE_FAMILY_URL = '../../../assets/data-collections/familyTreeCollection.json';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PictureService {
    constructor(private http: HttpClient) {}

    getPictureContents(): Observable<any> {
        return this.http
            .get(BASE_PICTURE_URL)
            .map(response => response)
            .catch(this.handleError);
    }

    getFamilyContents(): Observable<any> {
        return this.http
            .get(BASE_FAMILY_URL)
            .map(res => res)
            .catch(this.handleError);
    }

    handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
