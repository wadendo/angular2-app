import {bootstrap} from 'angular2/platform/browser';
import {AnotherAppApp} from './app/another-app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AnotherAppApp, [
  ROUTER_PROVIDERS,HTTP_PROVIDERS
]);
