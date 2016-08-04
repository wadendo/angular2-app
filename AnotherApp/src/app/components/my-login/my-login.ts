import {Component} from 'angular2/core';


@Component({
  selector: 'my-login',
  templateUrl: 'app/components/my-login/my-login.html',
  styleUrls: ['app/components/my-login/my-login.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MyLogin {

  constructor(
    public identifiant : string,
    public mdp : string
  ) {


  }

}
