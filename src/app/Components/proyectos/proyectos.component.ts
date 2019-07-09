import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css', './proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  selectedIndex = 0;
  theta: number = 80;
  valorActual = 0;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private zone: NgZone) { }

  arregloFoto = [
    "../../../assets/Proyectos/celular-1.png",
    "../../../assets/Proyectos/celular-2.png",
    "../../../assets/Proyectos/celular-3.png",
    "../../../assets/Proyectos/celular-4.png",
    "../../../assets/Proyectos/celular-5.png",
    "../../../assets/Proyectos/celular-6.png",
    "../../../assets/Proyectos/celular-7.png",
    "../../../assets/Proyectos/celular-8.png",
    "../../../assets/Proyectos/celular-9.png",
    "../../../assets/Proyectos/celular-10.png",
  ];

  arregloClass = [
    "level3 nodosIntermedios",
    "level2 nodosIntermedios",
    "level1 nodosIntermedios",
    "level0 nodoCentral",
    "level-1 nodosIntermedios",
    "level-2 nodosIntermedios",
    "level-3 nodosIntermedios"
  ];

  arrItems = [0, 1, 2, 3, 4, 5, 6];




  ngOnInit() {
  }
  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }


  swapArrayElements(a, x, y) {
    // tslint:disable-next-line:curly
    if (a.length === 1) return a;
    a.splice(y, 1, a.splice(x, 1, a[y])[0]);
    return a;
  }


  moverCarousel(movimiento) {

    if (movimiento === 'izquierda') {

      this.swapArrayElements(this.arrItems, 5, 6);
      this.swapArrayElements(this.arrItems, 4, 5);
      this.swapArrayElements(this.arrItems, 3, 4);
      this.swapArrayElements(this.arrItems, 2, 3);
      this.swapArrayElements(this.arrItems, 1, 2);
      this.swapArrayElements(this.arrItems, 0, 1);


      // const primerElemento = document.getElementById("item-1").classList;
      // const ultimoElemento = document.getElementById("item-4").classList;

      // primerElemento.add("right-leave");
      // primerElemento.add("right-leave-active");
      // ultimoElemento.add("right-enter");
      // ultimoElemento.add("right-enter-active");

      // setTimeout(() => {
      //   primerElemento.remove("right-leave");
      //   primerElemento.remove("right-leave-active");
      //   ultimoElemento.remove("right-enter-active");
      //   ultimoElemento.remove("right-enter");
      //   this.valorActual += 1;
      // }, 1000);


    }
    if (movimiento === 'derecha') {


      this.swapArrayElements(this.arrItems, 0, 1);
      this.swapArrayElements(this.arrItems, 1, 2);
      this.swapArrayElements(this.arrItems, 2, 3);
      this.swapArrayElements(this.arrItems, 3, 4);
      this.swapArrayElements(this.arrItems, 4, 5);
      this.swapArrayElements(this.arrItems, 5, 6);

      // const primerElemento = document.getElementById("item-1").classList;
      // const ultimoElemento = document.getElementById("item-5").classList;
      // ultimoElemento.add("left-leave");
      // ultimoElemento.add("left-leave-active");
      // primerElemento.add("left-enter");
      // primerElemento.add("left-enter-active");

      // setTimeout(() => {
      //   document.getElementById("item-5").classList.remove("left-leave");
      //   document.getElementById("item-5").classList.remove("left-leave-active");
      //   document.getElementById("item-1").classList.remove("left-enter-active");
      //   document.getElementById("item-1").classList.remove("left-enter");
      //   this.valorActual -= 1;
      // }, 1000);


    }




  }


  irACelular(numeroItem) {
    let bandera = true;
    let arrItem = this.arrItems[this.arrItems.findIndex(element => element == numeroItem)];
    while (bandera) {
      if (arrItem == this.arrItems[3]) {
        bandera = false;
      } else {
        this.swapArrayElements(this.arrItems, 5, 6);
        this.swapArrayElements(this.arrItems, 4, 5);
        this.swapArrayElements(this.arrItems, 3, 4);
        this.swapArrayElements(this.arrItems, 2, 3);
        this.swapArrayElements(this.arrItems, 1, 2);
        this.swapArrayElements(this.arrItems, 0, 1);
      }
    }
  }

}
