import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-my-login',
  templateUrl: 'my-login.component.html',
  styleUrls: ['my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  constructor(public identifiant : string, public mdp : string) {


  }
  ngOnInit() {
  }

}
