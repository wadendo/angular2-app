import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Myvideo} from './components/myvideo/myvideo';
import {ListMedias} from './components/list-medias/list-medias';


@Component({
  selector: 'another-app-app',
  providers: [],
  templateUrl: 'app/another-app.html',
  directives: [ROUTER_DIRECTIVES, Myvideo, ListMedias],
  pipes: []
})
@RouteConfig([

])
export class AnotherAppApp {
  videoSelected : boolean;
  audioSelected : boolean;
  photoSelected : boolean;

  clickedMedia(media: String) {
      this.videoSelected  = media === 'video';
      this.audioSelected = media === 'audio';
      this.photoSelected = media === 'photo';
  }
}
