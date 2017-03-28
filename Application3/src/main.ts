import './polyfills';
//import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, Component } from '@angular/core';
import { AppComponent, environment} from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

/*bootstrap(AppComponent, [
  HTTP_PROVIDERS, ROUTER_DIRECTIVES, APP_ROUTER_PROVIDERS,  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBpTyEDEm2pCmsr4QQHOsik-F8H_a2qEIs",
    authDomain: "makarimalakhlakh.firebaseapp.com",
    databaseURL: "https://makarimalakhlakh.firebaseio.com",
    storageBucket: "makarimalakhlakh.appspot.com"
  })

]);*/
