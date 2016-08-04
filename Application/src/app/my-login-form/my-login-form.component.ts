import { Component, OnInit } from '@angular/core';
import  {MyLoginComponent} from '../../app/my-login';
@Component({
  moduleId: module.id,
  selector: 'app-my-login-form',
  templateUrl: 'my-login-form.component.html',
  styleUrls: ['my-login-form.component.css'],
  directives : [MyLoginComponent]
})
export class MyLoginFormComponent implements OnInit {
  model = new MyLoginComponent("identifiant","mot de passe");
  submitted = false;
  onsubmit() {this.submitted = true;}
  constructor() {}

  ngOnInit() {
  }

}
