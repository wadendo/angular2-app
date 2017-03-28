import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MyLogin} from '../my-login/my-login';


@Component({
  selector: 'my-login-form',
  templateUrl: 'app/components/my-login-form/my-login-form.html',
  styleUrls: ['app/components/my-login-form/my-login-form.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MyLoginForm {
  model = new MyLogin("identifiant","mot de passe");
  submitted = false;
  onsubmit() {this.submitted = true;}
  constructor() {}

}
