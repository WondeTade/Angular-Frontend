import { NgModule } from '@angular/core';
import { EthioCelebritieListComponent } from './celebrities-list/celebrities-list.component';
import { EthioCelebrityDetailsComponent } from './celebrities-details/celebrities-detials.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateCelebrityComponent } from '../create/create-celebrity.component';


@NgModule({

    imports: [    
        SharedModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild (
            [
                { path: 'ethio-celebrities', component: EthioCelebritieListComponent },
                { path: 'ethio-celebrities/:id', component: EthioCelebrityDetailsComponent },
                { path: 'ethio-celebrities/:id/edit', component: CreateCelebrityComponent }
                
            ]
        )
    ],
    declarations: [
        EthioCelebritieListComponent,
        EthioCelebrityDetailsComponent  
    ]
})
export class EthioCelebritiesModule {}