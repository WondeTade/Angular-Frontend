import { Component } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'bulimas-app',
  template: `
                  <nav-bar></nav-bar>
              
                  <router-outlet></router-outlet>
        
              <div class="footer-section">
                  <footer class="footer">
                      <p> {{ author }}  {{ year }} <strong>{{ logo }}</strong>    {{ website }}</p>
                  </footer>
              </div>
            `
})
export class BulimasAppComponent {

  author: string = 'Wonde Ergano';
  year: number = 2020;
  copyright: string = '$copy;';
  logo: string = 'Bu-Li-Ma';
  website: string = 'www.bulimas.com';
}
