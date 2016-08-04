import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MouridismeTextComponent} from '../app/mouridisme-text/';
import {ListMediasComponent}   from '../app/list-medias/';

//import {MyRegisterFormComponent} from '../app/my-register-form'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives :[MouridismeTextComponent, ListMediasComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  videoSelected : boolean;
  audioSelected : boolean;
  photoSelected : boolean;

  contructor (){
    this.videoSelected  = true;
  }

  

  clickedMedia(media: String) {
      this.videoSelected  = media === 'video';
      this.audioSelected = media === 'audio';
      this.photoSelected = media === 'photo';
  }
}
