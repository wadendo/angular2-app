import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import {MediaServiceService} from '../../app/media-service.service';
@Component({
  moduleId: module.id,
  selector: 'app-my-video',
  templateUrl: 'my-video.component.html',
  styleUrls: ['my-video.component.css'],
  providers : [MediaServiceService]
})
export class MyVideoComponent implements OnInit {
   myUrl : SafeResourceUrl;
  constructor(sanitizer: DomSanitizationService, mediaService : MediaServiceService) {
    this.myUrl = mediaService.getMedia() || sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/v/Gy-xz4JCI1Q');
    console.log(mediaService.getMedia());
    //console.log(this.myUrl);
  }

  ngOnInit() {
  }

}
