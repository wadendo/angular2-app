import { Component } from '@angular/core';
import {MouridismeTextComponent} from '../app/mouridisme-text/';
import {ListMediasComponent}   from '../app/list-medias/';

//import {MyRegisterFormComponent} from '../app/my-register-form'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  videoSelected : boolean;
  audioSelected : boolean;
  photoSelected : boolean;

  contructor (){
    this.videoSelected  = true;
  }



  clickedMedia(media: String) {
      console.log(media);
      this.videoSelected  = media === 'video';
      this.audioSelected = media === 'audio';
      this.photoSelected = media === 'photo';
  }
}
