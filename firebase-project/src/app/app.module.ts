import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';

import {firebaseConfig} from '../environments/firebase.config';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";



import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
