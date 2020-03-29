import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { BodyThumbnailComponent } from './body-thumbnail.component';
import { BodyComponent } from './body.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
    
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        BodyThumbnailComponent,
        BodyComponent,
        WelcomeComponent
    ]


})
export class StartPageModule {}