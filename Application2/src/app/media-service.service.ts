import { Injectable } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class MediaServiceService {

media : string;
 constructor() {

 }
 setMedia(media : string){
   this.media = media;
   console.log(this.media);
 }

 getMedia(){
   return this.media;
 }

}
