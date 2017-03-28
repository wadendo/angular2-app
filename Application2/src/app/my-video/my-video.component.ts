
@Component({
  selector: 'app-my-video',
  templateUrl: 'my-video.component.html',
  styleUrls: ['my-video.component.css'],
  
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
