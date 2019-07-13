import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-iniciar-proyecto',
  templateUrl: './iniciar-proyecto.component.html',
  styleUrls: ['./iniciar-proyecto.component.css']
})
export class IniciarProyectoComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, public _MessageService: MessageService) { }

  ngOnInit() {
  }


  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }

  sendMail() {

    // tslint:disable-next-line:prefer-const
    let form = {
      nombre: "Andres",
      email: "pipechia11@hotmail.com",
      asunto: "correo prueba",
      mensaje: "holi"
      // tslint:disable-next-line:semicolon
    }

    // this._MessageService.sendMessage(form).subscribe(() => {
    //   console.log("enviado");
    // });


  }
}
