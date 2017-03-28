@Component({
  moduleId: module.id,
  selector: 'app-my-register-form',
  templateUrl: 'my-register-form.component.html',
  styleUrls: ['my-register-form.component.css']
})
export class MyRegisterFormComponent implements OnInit {
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

  ngOnInit() {
  }

}
