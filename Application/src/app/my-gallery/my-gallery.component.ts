import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  moduleId: module.id,
  selector: 'app-my-gallery',
  templateUrl: 'my-gallery.component.html',
  styleUrls: ['my-gallery.component.css']

})
export class MyGalleryComponent implements OnInit {
  photos: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
   this.photos = af.database.list('/photos');
    console.log(af.database.list('/photos'))
  }

  ngOnInit() {
  }

}
