import {bootstrap} from 'angular2/platform/browser';
import {AnotherAppApp} from './app/another-app';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AnotherAppApp, [
  ROUTER_PROVIDERS
]);
