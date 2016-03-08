import {Component, Input} from 'angular2/core';
import {MediaService} from '../../services/media-service/media-service';


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


  constructor() {}

  onButtonClick(video){
    console.log(video);
  }

  getAudiosUrl (mediaservice : MediaService){
    mediaservice.getAllAudios().map(res => console.log(res.json()));
  }
}
