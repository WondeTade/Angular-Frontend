import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { EthioCelebritiyBasicInfo } from '../const-ethio-celebrities/celebrities-basic-information';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json'
        }
    )
};

@Injectable({
    providedIn: 'root'
})
export class EthioCelebritiesService {

    name: string = '';
    basicInfo: EthioCelebritiyBasicInfo;

    private baseUrl = 'https://bulima-global-spring-boot.herokuapp.com/api/v1/person/';
    private updateUrl = 'https://bulima-global-spring-boot.herokuapp.com/api/v1/person/update';
    private createUrl = 'https://bulima-global-spring-boot.herokuapp.com/api/v1/person/create';
    private byIdUrl = 'https://bulima-global-spring-boot.herokuapp.com/api/v1/person/id';
    private deleteUrl = 'https://bulima-global-spring-boot.herokuapp.com/api/v1/person/delete';

    constructor(private http: HttpClient) { 

    }

    getCelebrities(): Observable<EthioCelebritiyBasicInfo[]> {
        return this.http.get<EthioCelebritiyBasicInfo[]>(this.baseUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.errorHandler)
            ); 
    }

    getCelebrityByName(fullName: string): Observable<EthioCelebritiyBasicInfo> {
        const url = `${this.baseUrl}${fullName}`
        return this.http.get<EthioCelebritiyBasicInfo>(url)
            .pipe(
                tap(data => console.log('getCelebrityByName: ' + JSON.stringify(data))),
                catchError(this.errorHandler),
                
            );
    }

    getCelebrityById(id: number): Observable<EthioCelebritiyBasicInfo> {

        const url = `${this.byIdUrl}/${id}`
        return this.http.get<EthioCelebritiyBasicInfo>(url)
            .pipe(
                tap(data => console.log('getCelebrityById: ' + JSON.stringify(data))),
                catchError(this.errorHandler)
            );
    }

    createPersonInfo(celebrity: EthioCelebritiyBasicInfo): Observable<EthioCelebritiyBasicInfo> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<EthioCelebritiyBasicInfo>(this.createUrl, celebrity, { headers: headers })
            .pipe(
                tap(data => console.log('createPersonInfo: ' + JSON.stringify(data))),
                catchError(this.errorHandler)
            );
            
    }

    private errorHandler(httpError: HttpErrorResponse) {
        let errorMesage = '';
        if (httpError.error instanceof ErrorEvent) {
            errorMesage = `An error occured:  ${httpError.error.message}`;
        }
        else {
            errorMesage = `Server returned code:  ${httpError.status}, error message is: ${httpError.message}`
        }
        console.error(errorMesage);
        return throwError(errorMesage);
    }

    updateCelebrityInfo(celebrity: EthioCelebritiyBasicInfo): Observable<EthioCelebritiyBasicInfo> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<EthioCelebritiyBasicInfo>(this.updateUrl, celebrity, { headers: headers })
            .pipe(
                tap(() => console.log('updateCelebrityInfo: ' + celebrity.fullName)),
                map(() => celebrity),
                catchError(this.errorHandler)
            );
            
    }

    deleteCelebrity(id: number): Observable<void> {
        const url = `${this.deleteUrl}/${id}`
        return this.http.delete<void>(url)
        .pipe(catchError(this.errorHandler));
        
    }

    initCelebrityInfo(): EthioCelebritiyBasicInfo {
        return {
            personId: null,
            fullName: null,
            maritalStatus: null,
            personAge: null,
            numberOfChild: null,
            facebookUrl: null,
            instagramUrl: null,
            youtubeUrl: null,
            telegramUrl: null,
            twitterUrl: null,
            personPhoto: null
        }
    }


}
