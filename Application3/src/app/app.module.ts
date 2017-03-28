import {NgModule,Component, OnInit, Input} from "@angular/core";
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent }   from './app.component';
import {MouridismeTextComponent} from './mouridisme-text/mouridisme-text.component';
import {MyAudioComponent} from './my-audio/my-audio.component';
import {MyGalleryComponent} from './my-gallery/my-gallery.component';
import {MyLoginComponent} from './my-login/my-login.component';
import {MyLoginFormComponent} from './/my-login-form/my-login-form.component';
import {MyRegisterFormComponent} from './my-register-form/my-register-form.component';
import {MyVideoComponent} from './my-video/my-video.component';
import {MediaServiceService} from './media-service.service';
import {ListMediasComponent} from './list-medias/list-medias.component';
import {AngularFireModule,  defaultFirebase} from 'angularfire2';
import { routes } from './app.routes';

const config = {
  apiKey: "AIzaSyBpTyEDEm2pCmsr4QQHOsik-F8H_a2qEIs",
  authDomain: "makarimalakhlakh.firebaseapp.com",
  databaseURL: "https://makarimalakhlakh.firebaseio.com",
  storageBucket: "makarimalakhlakh.appspot.com"
};

@NgModule({
  imports : [AngularFireModule.initializeApp(config),
            HttpModule,
            RouterModule.forRoot(routes),
            BrowserModule,
            FormsModule],
  declarations: [
    AppComponent,
    MouridismeTextComponent,
    MyAudioComponent,
    MyGalleryComponent,
    MyLoginComponent,
    MyLoginFormComponent,
    MyRegisterFormComponent,
    MyVideoComponent,
    ListMediasComponent
  ],
  providers: [MediaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*HTTP_PROVIDERS, ROUTER_DIRECTIVES, APP_ROUTER_PROVIDERS,  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBpTyEDEm2pCmsr4QQHOsik-F8H_a2qEIs",
    authDomain: "makarimalakhlakh.firebaseapp.com",
    databaseURL: "https://makarimalakhlakh.firebaseio.com",
    storageBucket: "makarimalakhlakh.appspot.com"
  })*/
}
