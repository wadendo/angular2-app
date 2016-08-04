import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';


@Component({
  selector: 'my-register-form',
  templateUrl: 'app/components/my-register-form/my-register-form.html',
  styleUrls: ['app/components/my-register-form/my-register-form.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MyRegisterForm {

  nom : string = 'Nom';
  prenom : string = 'Prenom';
  birth_day : Date ;
  town : string = 'Ville';
  dahira : string = 'Dahira';
  situations : string[] = ['M','Mme'];
  objValue1 :string = this.situations[0];
  submitted = false;
  onsubmit() {this.submitted = true;}
  constructor() {}


}
