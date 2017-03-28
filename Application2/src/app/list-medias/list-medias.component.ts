
@Component({
  selector: 'app-list-medias',
  templateUrl: 'list-medias.component.html',
  styleUrls: ['list-medias.component.css'],
  providers: [MediaServiceService],

  pipes: []
})
export class ListMediasComponent implements OnInit {
  @Input() video : boolean;
  @Input() audio : boolean;
  @Input() photo : boolean;
  videos : FirebaseListObservable<any[]>;
  audios : FirebaseListObservable<any[]>;
  mediaService : MediaServiceService;
  constructor(af: AngularFire, mediaService : MediaServiceService) {
      this.video = true;
      this.mediaService = mediaService;
      this.videos = af.database.list('/videos');

    //  af.database.list('/videos').push({'name':'video1', 'url': 'https://youtu.be/O_yEsRuZ8hk'});
  //    af.database.list('/videos').push({'name':'video2', 'url': 'https://youtu.be/O_yEsRuZ8hk'});

  }

  ngOnInit() {
  }

  onButtonClick(video : string){
  this.mediaService.setMedia(video);
  console.log(this.mediaService.getMedia())
}

/*getAudiosUrl(){
  this.mediaservice.getAllAudios()
          .map(data => data.json())
          .subscribe(data => console.log(data));

}*/

}
