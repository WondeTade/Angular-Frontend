import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BulimasAppComponent } from './bulimas.app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { appRoutes } from './appOrchestrator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { EthioCelebritiesModule } from './components/ethio-celebrities/ethio-celebrities.module';
import { HttpClientModule } from '@angular/common/http';
import { StartPageModule } from './components/body/start-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCelebrityComponent } from './components/create/create-celebrity.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EthioCelebritiesModule,
    HttpClientModule,
    StartPageModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],

  declarations: [
    BulimasAppComponent,
    NavBarComponent,
    CreateCelebrityComponent
  ],

  providers: [],
  bootstrap: [BulimasAppComponent]

})
export class AppModule { }
