import { Component, OnInit } from '@angular/core';
import { VideoGamesService } from '../video-games.service';
import {VideoGames} from '../video';
import { switchMap, debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
               private videoGamesService: VideoGamesService) { }

  videoGames: VideoGames[];
  videoGame: VideoGames;

  getVidGames(): void {
  	this.videoGamesService.getVideoGames()
      .subscribe(Data => {console.log(Data);this.videoGames = Data});
  }

  vGame(): void {
    const id = 3;
    //+this.route.snapshot.paramMap.get('id'); 
  	this.videoGamesService.videoGame(id)
      .subscribe(Data => { 
        this.videoGame = Data;
      });
      console.log(id);

  }

  /*skip: number = 0;
  limit = 9;
  query: string = "";
  fields: string = "";
  sort: string = "{name:1}";*/

  ngOnInit(){
    this.vGame();
    
  }

}
