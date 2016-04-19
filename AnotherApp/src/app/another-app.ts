import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Myvideo} from './components/myvideo/myvideo';
import {ListMedias} from './components/list-medias/list-medias';
import {MyAudio} from './components/my-audio/my-audio';
import {MyGallery} from './components/my-gallery/my-gallery';


@Component({
  selector: 'another-app-app',
  providers: [],
  templateUrl: 'app/another-app.html',
  directives: [ROUTER_DIRECTIVES, Myvideo, ListMedias,MyAudio, MyGallery],
  pipes: []
})
@RouteConfig([
  {path : '/video',name:'Video',component:Myvideo},
  {path : '/audio',name:'Audio', component:MyAudio},
  {path : '/photo',name:'Photo',component:MyGallery}
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
