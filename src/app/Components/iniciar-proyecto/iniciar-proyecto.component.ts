import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-iniciar-proyecto',
  templateUrl: './iniciar-proyecto.component.html',
  styleUrls: ['./iniciar-proyecto.component.css']
})
export class IniciarProyectoComponent implements OnInit {

  form = {
    nombre: "",
    email: "",
    asunto: "Nuevo mensaje: NUCLEAR TREE HOUSE",
    mensaje: ""
    // tslint:disable-next-line:semicolon
  }


  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, public _MessageService: MessageService) { }

  ngOnInit() {
  }



  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }

  sendMail() {

    const expresion = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const bandera = this.form.email.match(expresion);


    if (this.form.nombre === "") {
      document.getElementById("inputNombre").classList.add("faltante");
      document.getElementById("inputNombre").setAttribute("title", "Nombre faltante");
    } else {
      document.getElementById("inputNombre").classList.remove("faltante");
      document.getElementById("inputNombre").removeAttribute("title");
    }
    if (this.form.email === "" || bandera == null) {
      document.getElementById("inputEmail").classList.add("faltante");
      document.getElementById("inputNombre").setAttribute("title", "Email faltante");
    } else {
      document.getElementById("inputEmail").classList.remove("faltante");
      document.getElementById("inputNombre").removeAttribute("title");
    }
    if (this.form.mensaje === "") {
      document.getElementById("inputMensaje").classList.add("faltante");
      document.getElementById("inputNombre").setAttribute("title", "Mensaje faltante");
    } else {
      document.getElementById("inputMensaje").classList.remove("faltante");
      document.getElementById("inputNombre").removeAttribute("title");
    }



    if (this.form.nombre !== "" && this.form.asunto !== "" && this.form.email !== "" && bandera !== null && this.form.mensaje !== "") {
      this._MessageService.enviarMensaje(this.form).subscribe();
      this.form = {
        nombre: "",
        email: "",
        asunto: "Nuevo mensaje: NUCLEAR TREE HOUSE",
        mensaje: ""
      };

    }


    // this._MessageService.sendMessage(form).subscribe(() => {
    //   console.log("enviado");
    // });


  }
}
