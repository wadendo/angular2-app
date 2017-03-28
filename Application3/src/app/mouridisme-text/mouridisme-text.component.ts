import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mouridisme-text',
  template: `<div><img src="{{photoURL}}" width="{{widthPhoto}}" height="{{heightPhoto}}"/>
                {{textTemplate}} <br>
                <a class="fa fa-twitter" aria-hidden="true">Je suis là</a>
            </div>`,
  styleUrls: ['mouridisme-text.component.css']
})
export class MouridismeTextComponent implements OnInit {
  @Input() photoURL : string;
  @Input() textTemplate : string;
  @Input() widthPhoto : number = 500;
  @Input() heightPhoto : number;
  @Input() tweeterLink : string;
  fromServer = {
    'textTemplate':'Apparence ou par Ses Actes. En effet, pour faire connaître Sa Puissance ainsi que Sa Grandeur, Notre Seigneur créa un autre monde appelé Malakout. Dans ce dernier se trouvent le paradis et l’enfer. IL y créa des êtres faits seulement de lumière, les Anges dont la seule mission qui leur est dévolue est d’adorer notre Seigneur.',
    'photoURL':'../images/image_bamba1.png',
    'widthPhoto':500,
    'heightPhoto': 250,
    'tweeterLink':'<a class="fa fa-twitter" aria-hidden="true">Je suis là</a>'
  }
  constructor() {
    // prendre les données à partir du serveur
   this.textTemplate = this.fromServer.textTemplate;
   this.photoURL=this.fromServer.photoURL;
   this.widthPhoto=this.fromServer.widthPhoto;
   this.heightPhoto=this.fromServer.heightPhoto;
   this.tweeterLink = this.fromServer.tweeterLink
  }

  ngOnInit() {
  }

}
