import {Routes} from '@angular/router';
import  {MouridismeTextComponent} from '../app/mouridisme-text/';
import {MyGalleryComponent} from '../app/my-gallery/';
import {MyAudioComponent} from '../app/my-audio/';
import {MyVideoComponent} from '../app/my-video/';
import {MyLoginFormComponent} from '../app/my-login-form/';
import {MyRegisterFormComponent} from '../app/my-register-form';
import {AppComponent} from '../app'

export const routes : Routes = [
  {
    path: '',
    redirectTo: 'video'
  },
  {path : 'mourideText', component : MouridismeTextComponent},
  {path : 'photo', component : MyGalleryComponent},
  {path : 'audio', component : MyAudioComponent},
  {path : 'video',component : MyVideoComponent},
  {path: '', component : AppComponent},
  {path : 'login', component : MyLoginFormComponent},
  {path : 'register', component : MyRegisterFormComponent}
];
