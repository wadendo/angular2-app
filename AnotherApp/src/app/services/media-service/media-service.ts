import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Injectable()
export class MediaService {
   http : Http;
  constructor() {}
   getAllAudios(){
    return this.http.get('/app/files/audios.json');
  }
}
