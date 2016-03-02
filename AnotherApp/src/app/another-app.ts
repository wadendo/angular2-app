import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Myvideo} from './components/myvideo/myvideo';


@Component({
  selector: 'another-app-app',
  providers: [],
  templateUrl: 'app/another-app.html',
  directives: [ROUTER_DIRECTIVES, Myvideo],
  pipes: []
})
@RouteConfig([

])
export class AnotherAppApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
