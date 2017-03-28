import {Routes} from '@angular/router';
import  {MouridismeTextComponent} from './mouridisme-text/';
import {MyGalleryComponent} from './my-gallery/';
import {MyAudioComponent} from './my-audio/';
import {MyVideoComponent} from './my-video/';
import {MyLoginFormComponent} from './my-login-form/';
import {MyRegisterFormComponent} from './my-register-form';
import {AppComponent} from './app.component'

export const routes : Routes = [
 {
    path: '',
    redirectTo: 'video',
    pathMatch : 'full'
 },
  {path : 'mourideText', component : MouridismeTextComponent},
  {path : 'photo', component : MyGalleryComponent},
  {path : 'audio', component : MyAudioComponent},
  {path : 'video',component : MyVideoComponent},
  {path : 'login', component : MyLoginFormComponent},
  {path : 'register', component : MyRegisterFormComponent}
];
