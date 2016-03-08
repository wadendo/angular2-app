import {Component, Input} from 'angular2/core';


@Component({
  selector: 'list-medias',
  templateUrl: 'app/components/list-medias/list-medias.html',
  styleUrls: ['app/components/list-medias/list-medias.css'],
  providers: [],
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

}
