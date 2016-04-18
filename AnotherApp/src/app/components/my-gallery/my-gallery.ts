import {Component,Input} from 'angular2/core';


@Component({
  selector: 'my-gallery',
  templateUrl: 'app/components/my-gallery/my-gallery.html',
  styleUrls: ['app/components/my-gallery/my-gallery.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MyGallery {
 @Input()
 listOfImages : String[];
  constructor( ) {
   this.listOfImages = ["http://demosthenes.info/assets/images/austin-fireworks.jpg","http://demosthenes.info/assets/images/taj-mahal.jpg","http://demosthenes.info/assets/images/ibiza.jpg"];
  }

}
