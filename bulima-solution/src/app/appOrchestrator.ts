import { Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { AbigailBlogComponent } from './components/abigail-blog/abigail-blog.component';
import { CreateCelebrityComponent } from './components/create/create-celebrity.component';


export const appRoutes:Routes = [
    
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BodyComponent },
    { path: 'abigail-blog', component: AbigailBlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'registration', component: CreateCelebrityComponent }
    
    
]