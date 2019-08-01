import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()

export class MessageService {
  url: string = "https://fihgp8aw9j.execute-api.us-east-1.amazonaws.com/Implementada/";
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:max-line-length
  // https://d7bcdml3aa.execute-api.us-east-2.amazonaws.com/Lista/sendcorreo?nombre=hola&email=pipechia11@hotmail.com&asunto=prueba&mensaje=mensaje%20de%20prueba
  // https://fihgp8aw9j.execute-api.us-east-1.amazonaws.com/Implementada/sendcorreo

  enviarMensaje(datos) {
    // tslint:disable-next-line:max-line-length
    const params = new HttpParams().set("email", datos.email).set("nombre", datos.nombre).set("asunto", datos.asunto).set("mensaje", datos.mensaje);

    return this.http.get(this.url + "sendcorreo", { params }).map(res => {

    });
  }


  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('ERROR DEL CLIENTE :', errorResponse.error.message);
    } else {
      console.error('ERROR DEL SERVIDOR :', errorResponse);
    }
    // tslint:disable-next-line:max-line-length
    return Observable.throw('EN ESTE MOMENTO TENEMOS PROBLEMAS CON EL SERVICIO. SERA NOTIFICADO CUANDO FUNCIONE. POR FAVOR INTENTE DE NUEVO.');
  }



}
