import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EthioCelebritiesService } from './ethio-celebrities.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ArticleResolver implements Resolve<any> {

    constructor(private celebrityService: EthioCelebritiesService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.celebrityService.getCelebrityById(route.params['id'])
    }
}