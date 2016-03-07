import {Component} from 'angular2/core';


@Component({
  selector: 'list-medias',
  templateUrl: 'app/components/list-medias/list-medias.html',
  styleUrls: ['app/components/list-medias/list-medias.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ListMedias {
  video : boolean;
  audio :boolean;
  photo : boolean;
  constructor() {}
  onButtonClick(video){
    console.log(video);
  }

  clickedMedia(media){
    if(media ==='video')
    {
      this.video = true;
      this.audio = false;
      this.photo = false;
    }
    else if(media ==='audio')
    {
      this.video = false;
      this.audio = true;
      this.photo = false;
    }
    else if(media ==='photo')
    {
      this.video = false;
      this.audio = false;
      this.photo = true;
    }
  }

}
