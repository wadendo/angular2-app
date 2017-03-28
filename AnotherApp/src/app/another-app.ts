import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Myvideo} from './components/myvideo/myvideo';
import {ListMedias} from './components/list-medias/list-medias';
import {MyAudio} from './components/my-audio/my-audio';
import {MyGallery} from './components/my-gallery/my-gallery';
import {MouridismeText} from './components/mouridisme-text/mouridisme-text';
import {MyLogin} from './components/my-login/my-login';
import {MyLoginForm} from './components/my-login-form/my-login-form';
import {MyRegisterForm} from './components/my-register-form/my-register-form';

@Component({
  selector: 'another-app-app',
  providers: [],
  templateUrl: 'app/another-app.html',
  directives: [ROUTER_DIRECTIVES, Myvideo, ListMedias,MyAudio, MyGallery,MouridismeText, MyLogin, MyLoginForm, MyRegisterForm],
  pipes: []
})
@RouteConfig([
  {path : '/video',name:'Video',component:Myvideo},
  {path : '/audio',name:'Audio', component:MyAudio},
  {path : '/photo',name:'Photo',component:MyGallery},
  {path : '/mouridetext',name:'Mouridetext',component:MouridismeText},
  {path : '/login',name:'Login',component:MyLoginForm},
  {path : '/register',name:'Register',component:MyRegisterForm}
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
