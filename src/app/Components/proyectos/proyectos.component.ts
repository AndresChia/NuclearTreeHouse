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
  TemaActual = "KuroiTako";
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private zone: NgZone) { }

  arregloFoto = [
    { link: "../../../assets/Proyectos/celular-1.png", tema: "SqueakyGhost" },
    { link: "../../../assets/Proyectos/celular-2.png", tema: "Paradisso" },
    { link: "../../../assets/Proyectos/celular-3.png", tema: "Capsula" },
    { link: "../../../assets/Proyectos/celular-4.png", tema: "HijaDePalenquera" },
    { link: "../../../assets/Proyectos/celular-5.png", tema: "LatidoConcluso" },
    { link: "../../../assets/Proyectos/celular-6.png", tema: "42Magazine" },
    { link: "../../../assets/Proyectos/celular-7.png", tema: "KuroiTako" },
    { link: "../../../assets/Proyectos/celular-8.png", tema: "BonusBread" },
    { link: "../../../assets/Proyectos/celular-9.png", tema: "Hoov" },
    { link: "../../../assets/Proyectos/celular-10.png", tema: "2Juice" },
    { link: "../../../assets/Proyectos/celular-11.png", tema: "DNews" },
    { link: "../../../assets/Proyectos/celular-12.png", tema: "Rolas" },
  ];

  arregloClass = [
    "Niveloculto",
    "Niveloculto",
    "Niveloculto",
    "level3 nodosIntermedios derecha 3",
    "level2 nodosIntermedios derecha 2",
    "level1 nodosIntermedios derecha 1",
    "level0 nodoCentral",
    "level-1 nodosIntermedios izquierda 1",
    "level-2 nodosIntermedios izquierda 2",
    "level-3 nodosIntermedios izquierda 3",
    "Niveloculto",
    "Niveloculto"
  ];

  arrItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];




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
    let index = this.arregloFoto.findIndex(elemento => elemento.tema === this.TemaActual);
    if (movimiento === 'izquierda') {
      this.swapArrayElements(this.arrItems, 10, 11);
      this.swapArrayElements(this.arrItems, 9, 10);
      this.swapArrayElements(this.arrItems, 8, 9);
      this.swapArrayElements(this.arrItems, 7, 8);
      this.swapArrayElements(this.arrItems, 6, 7);
      this.swapArrayElements(this.arrItems, 5, 6);
      this.swapArrayElements(this.arrItems, 4, 5);
      this.swapArrayElements(this.arrItems, 3, 4);
      this.swapArrayElements(this.arrItems, 2, 3);
      this.swapArrayElements(this.arrItems, 1, 2);
      this.swapArrayElements(this.arrItems, 0, 1);
      if (this.arregloFoto.length <= index + 1) {
        index = -1;
      }
      this.TemaActual = this.arregloFoto[index + 1].tema;
    }
    if (movimiento === 'derecha') {
      this.swapArrayElements(this.arrItems, 0, 1);
      this.swapArrayElements(this.arrItems, 1, 2);
      this.swapArrayElements(this.arrItems, 2, 3);
      this.swapArrayElements(this.arrItems, 3, 4);
      this.swapArrayElements(this.arrItems, 4, 5);
      this.swapArrayElements(this.arrItems, 5, 6);
      this.swapArrayElements(this.arrItems, 6, 7);
      this.swapArrayElements(this.arrItems, 7, 8);
      this.swapArrayElements(this.arrItems, 8, 9);
      this.swapArrayElements(this.arrItems, 9, 10);
      this.swapArrayElements(this.arrItems, 10, 11);
      if (0 > index - 1) {
        index = this.arregloFoto.length;
      }
      this.TemaActual = this.arregloFoto[index - 1].tema;
    }





  }



  irACelular(item: HTMLElement, arregloItem) {
    let derecha = false;

    if (item.classList.contains("level0")) {
      return;
    }

    if (item.classList.contains("derecha")) {
      derecha = true;
    }

    const veces = parseInt(item.classList[4], 10);

    if (!derecha) {
      for (let index = 0; index < veces; index++) {
        this.swapArrayElements(this.arrItems, 10, 11);
        this.swapArrayElements(this.arrItems, 9, 10);
        this.swapArrayElements(this.arrItems, 8, 9);
        this.swapArrayElements(this.arrItems, 7, 8);
        this.swapArrayElements(this.arrItems, 6, 7);
        this.swapArrayElements(this.arrItems, 5, 6);
        this.swapArrayElements(this.arrItems, 4, 5);
        this.swapArrayElements(this.arrItems, 3, 4);
        this.swapArrayElements(this.arrItems, 2, 3);
        this.swapArrayElements(this.arrItems, 1, 2);
        this.swapArrayElements(this.arrItems, 0, 1);
      }
    } else {
      for (let index = 0; index < veces; index++) {
        this.swapArrayElements(this.arrItems, 0, 1);
        this.swapArrayElements(this.arrItems, 1, 2);
        this.swapArrayElements(this.arrItems, 2, 3);
        this.swapArrayElements(this.arrItems, 3, 4);
        this.swapArrayElements(this.arrItems, 4, 5);
        this.swapArrayElements(this.arrItems, 5, 6);
        this.swapArrayElements(this.arrItems, 6, 7);
        this.swapArrayElements(this.arrItems, 7, 8);
        this.swapArrayElements(this.arrItems, 8, 9);
        this.swapArrayElements(this.arrItems, 9, 10);
        this.swapArrayElements(this.arrItems, 10, 11);
      }
    }


    this.TemaActual = arregloItem.tema;

  }

}
