import { Component, OnInit } from '@angular/core';
import { BodyContentService } from 'src/app/shared/services/body-content.service';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'bulimas-body',
    template: 
            ` 
                <bulimas-welcome></bulimas-welcome>
                <body-thumbnail *ngFor = "let article of articles"
                [articles] = "article" ></body-thumbnail>
            `
                
})
export class BodyComponent implements OnInit{

    articles: any[]
   constructor(private bodyContentService: BodyContentService,
                private meta: Meta){    
   }

   ngOnInit() {
       this.articles = this.bodyContentService.getArticles();
   }
}