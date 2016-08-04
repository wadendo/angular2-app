import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, Component } from '@angular/core';
import { AppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS, ROUTER_DIRECTIVES, APP_ROUTER_PROVIDERS,  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBpTyEDEm2pCmsr4QQHOsik-F8H_a2qEIs",
    authDomain: "makarimalakhlakh.firebaseapp.com",
    databaseURL: "https://makarimalakhlakh.firebaseio.com",
    storageBucket: "makarimalakhlakh.appspot.com"
  })

]);
