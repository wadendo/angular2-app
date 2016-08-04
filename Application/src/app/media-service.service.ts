import { Injectable } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class MediaServiceService {

  http : Http;
 constructor(http :Http) {
   this.http = http;
 }
  getAllAudios(){
   return this.http.get('/app/files/audios.json');
 }

}
