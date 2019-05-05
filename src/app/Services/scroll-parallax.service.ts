import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollParallaxService {


  posY = 0;

  constructor() {


    window.addEventListener("scroll", () => {

      if (window.pageYOffset) {
        this.posY = window.pageYOffset;
      }


    });

  }

  efectoParallex() {
    return { 'transform': 'translate(0px,' + this.posY + 'px)' };
  }

}
