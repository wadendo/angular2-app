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
  outputs : ['selectedMedia'],
  pipes: []
})
@RouteConfig([

])
export class AnotherAppApp {
  defaultMeaning: number = 42;

  videoSelected : boolean;
  audioSelected : boolean;
  photoSelected : boolean

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
  selectedMedia : EventEmitter<String> = new EventEmitter<String>();
  selectMedia(media: String) {
            if(media === 'video'){
                this.videoSelected  = true;
                this.audioSelected = false;
                this.photoSelected = false;
            }
            else if(media === 'audio'){
                this.videoSelected  = false;
                this.audioSelected = true;
                this.photoSelected = false;
            }
            else if(media == 'photo'){
              this.videoSelected  = true;
              this.audioSelected = false;
              this.photoSelected = true;
            }
  }
}
