import {Component, Input} from 'angular2/core';
import {MediaService} from '../../services/media-service/media-service';
import 'rxjs/Rx';

@Component({
  selector: 'list-medias',
  templateUrl: 'app/components/list-medias/list-medias.html',
  styleUrls: ['app/components/list-medias/list-medias.css'],
  providers: [MediaService],
  directives: [],
  pipes: []
})
export class ListMedias {
  @Input() video : boolean;
  @Input() audio :boolean;
  @Input() photo : boolean;

  mediaservice : MediaService;
  constructor(mediaservice : MediaService) {
    this.mediaservice = mediaservice;
    this.getAudiosUrl();
  }

  onButtonClick(video){
    console.log(video);
  }

  getAudiosUrl( ){
    this.mediaservice.getAllAudios()
            .map(data => data.json())
            .subscribe(data => console.log(data));

  }


}
