import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  isPlaying = false;
  audio = new Audio();

  ngOnInit(): void {
    this.audio.src = "assets/bgm2.mp3";
    this.audio.load();
  }

  playBg(){
    if(!this.isPlaying){
    this.audio.play();
    }
    else{
      this.audio.pause();
    }
    this.isPlaying= !this.isPlaying;
  }
}
