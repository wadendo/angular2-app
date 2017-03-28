import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent }   from './app.component';
import {MouridismeTextComponent} from './app/mouridisme-text/mouridisme.text';
import {MyAudioComponent} from './app/my-audio/my-audio';
import {MyGalleryComponent} from './app/my-gallery/my-gallery';
import {MyLoginComponent} from './app/my-login/my-login';
import {MyLoginFormComponent} from './app//my-login-form/my-login-form';
import {MyRegisterFormComponent} from './app/my-register-form/my-register-form';
import {MyVideoComponent} from './app/my-register-form/my-register-form';




import {AngularFireModule,  defaultFirebase} from 'angularfire2';
import { routes } from './app.routes';
@NgModule({
  imports : [AngularFireModule,
            HttpModule,
            RouterModule.forRoot(routes),
            BrowserModule],
  declarations: [
    AppComponent,
    MouridismeTextComponent,
  ],
  providers: [defaultFirebase({
    apiKey: "AIzaSyBpTyEDEm2pCmsr4QQHOsik-F8H_a2qEIs",
    authDomain: "makarimalakhlakh.firebaseapp.com",
    databaseURL: "https://makarimalakhlakh.firebaseio.com",
    storageBucket: "makarimalakhlakh.appspot.com"
  })],
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
