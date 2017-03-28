import { Component, OnInit } from '@angular/core';
import  {MyLoginComponent} from '../../app/my-login';
@Component({
  selector: 'app-my-login-form',
  templateUrl: 'my-login-form.component.html',
  styleUrls: ['my-login-form.component.css']
})
export class MyLoginFormComponent implements OnInit {
  model: MyLoginComponent = new MyLoginComponent("identifiant","mot de passe");
  submitted: boolean = false;
  onsubmit() {this.submitted = true;}
  constructor() {}

  ngOnInit() {
  }

}
