import {Component,Input} from 'angular2/core';


@Component({
  selector: 'mouridisme-text',
  template: '<div><img src={{photoURL}} width={{widthPhoto}} height={{heightPhoto}}/> '
  +'{{textTemplate}}'+'{{tweeterLink}}'+
  '</div>',
  styleUrls: ['app/components/mouridisme-text/mouridisme-text.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MouridismeText {
 @Input() photoURL : string;
 @Input() textTemplate : string;
 @Input() widthPhoto : number;
 @Input() heightPhoto : number;
 @Input() tweeterLink : string;
  constructor() {
    // prendre les données à partir du serveur
    this.textTemplate = "Apparence ou par Ses Actes. En effet, pour faire connaître Sa Puissance ainsi que Sa Grandeur, Notre Seigneur créa un autre monde appelé Malakout. Dans ce dernier se trouvent le paradis et l’enfer. IL y créa des êtres faits seulement de lumière, les Anges dont la seule mission qui leur est dévolue est d’adorer notre Seigneur. Leurs actes d’adoration ne leur sont destinés ni au Paradis, ni en Enfer. Il s’agit de leur nourriture et de leur boisson. Ces créatures prouvent la Puissance de Celui qui les a créées. C’est pourquoi, l’homme doit à tout moment réfléchir sur ce qui l’entoure, en commençant par la création des sept cieux et des sept terres. La méditation (fikr) lui permettra davantage de craindre notre Seigneur (que Sa Grandeur soit exaltée), Le Créateur de tout l’Univers et de s’astreindre a Ses recommandations. A la suite de Malakout, Notre Seigneur créa un autre monde qu’on appelle Mulk. IL y plaça les Hommes et les Djinns et leur ordonna de L’adorer. « Je n’ai créé les hommes et les Djinns que pour qu’ils"
;
this.photoURL="../images/image_bamba1.png";
this.widthPhoto=500;
this.heightPhoto=250;
this.tweeterLink = "<a href='https://twitter.com/share' class='twitter-share-button' data-via='NdongoWADE04'>Tweet</a>"+
"<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
}

}
