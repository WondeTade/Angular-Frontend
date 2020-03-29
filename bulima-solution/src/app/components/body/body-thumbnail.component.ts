import { Component, Input } from '@angular/core';

@Component({
    selector: 'body-thumbnail',
    template: `
            <div  class="articles-content" > 

                <a routerLink="/{{ articles.routing }}" class="article-heading" width="600" height="400">
                    <h1>{{ articles.heading }}</h1>
                </a> 
                    <p> {{ articles.paragraph_1 }} </p>
                    
                    <div *ngIf="articles?.paragraph_2">
                        <p> {{ articles.paragraph_2}}  </p>
                    </div>
                    <div *ngIf="articles?.paragraph_3">
                        <p> {{ articles.paragraph_3}}  </p>
                    </div>
                <a routerLink="/{{ articles.routing }}" width="600" height="400">
                    <img [src]="articles.imageUrl" alt="Facts about Ethiopia Image" class="article-image" width="600" height="400"> 
                </a>
                
                <span> {{ articles.source }} </span> 
        </div>
            `,
    styleUrls: ['./body.component.css']
})
export class BodyThumbnailComponent {

    @Input() articles: any;
} 