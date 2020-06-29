import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReintegroService {
  basic = 'Bearer ' + localStorage.getItem('token');
  // tslint:disable-next-line:radix
  suma = parseInt(localStorage.getItem('idUsuario')) + 1;
  common = this.suma.toString(this.suma);

  constructor(private http: HttpClient) { }

  reintegrosActivos(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', this.common);
    return this.http.get('http://localhost:49681/api/Dashboard/ReintegrosActivos', {params: param, headers: header});
  }

  reintegrosCancelados(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', this.common);
    return this.http.get('http://localhost:49681/api/Dashboard/ReintegrosCancelados', {params: param, headers: header});
  }

  reintegrosExitosos(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', this.common);
    return this.http.get('http://localhost:49681/api/Dashboard/ReintegrosExitosos', {params: param, headers: header});
  }

  cancelarReintegro(IdReintegro){
    console.log(IdReintegro);
    console.log(localStorage.getItem('token'));

    const header = new HttpHeaders({
      Authorization: this.basic
    });

    const param = new HttpParams().set('IdReintegro', IdReintegro);

    const options = {
      headers: header,
      params: param
    };

    console.log(options);
    return this.http
        .post('http://localhost:49681/api/transfer/CancelarReintegro', null, options);
  }
}
