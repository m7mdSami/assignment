import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  start:number = 0;
  sliders = [
    {
      url: '../../../assets/images/1.png'
    },
    {
      url: '../../../assets/images/2.png'
    },
    {
      url: '../../../assets/images/3.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  next(i){
    let sliderLength = this.sliders.length;
    let currentImg = i + 1;

    if(currentImg == sliderLength){
      this.start = 0;
    } else{
      this.start += 1;
    }
  }

  prev(i){
    let sliderLength = this.sliders.length;
    let currentImg = i;

    if( currentImg <= 0){
      this.start = sliderLength-1
    } else {
      this.start -= 1;
    }

  }
}
