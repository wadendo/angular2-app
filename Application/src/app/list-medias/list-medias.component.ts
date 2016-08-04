import { Component, OnInit, Input} from '@angular/core';
//import {MediaServiceService} from '../../app/media-service.service'
@Component({
  moduleId: module.id,
  selector: 'app-list-medias',
  templateUrl: 'list-medias.component.html',
  styleUrls: ['list-medias.component.css'],
  //providers: [MediaServiceService],
  directives: [],
  pipes: []
})
export class ListMediasComponent implements OnInit {
  @Input() video : boolean;
  @Input() audio : boolean;
  @Input() photo : boolean;

//  mediaservice : MediaServiceService;
  constructor() {
      this.video = true;
  }

  ngOnInit() {
  }

  onButtonClick(video){
  console.log(video);
}

/*getAudiosUrl(){
  this.mediaservice.getAllAudios()
          .map(data => data.json())
          .subscribe(data => console.log(data));

}*/

}
