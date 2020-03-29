import { Component } from '@angular/core';


@Component({
    selector: 'bulimas-welcome',
    template: `<div class="showcase">
                <div class="showcase-inner">
                    <h1>Welcome</h1>
                    <h2>To</h2>
                    <h2>{{ pageTitle }} </h2>
                    <a routerLink="/abigail-blog">
                        <button>Abigail Blog</button>
                    </a>
                </div>
                </div>
            `,
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

    pageTitle: string = "BuLiMa Global Solution";

}