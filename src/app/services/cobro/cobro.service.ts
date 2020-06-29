import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CobroService {

  formModel = this.form.group({
    idUsuarioSolicitante : [0, Validators.required],
    emailPagador : ['', [Validators.required, Validators.email]],
    monto : [0, Validators.required]
  });

  basic = 'Bearer ' + localStorage.getItem('token');

  constructor(private http: HttpClient, private form: FormBuilder) { }

  cobrosActivos(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', localStorage.getItem('idUsuario'));
    return this.http.get('http://localhost:49681/api/dashboard/cobrosactivos', {params: param, headers: header});
  }

  cobrosCancelados(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', localStorage.getItem('idUsuario'));
    return this.http.get('http://localhost:49681/api/dashboard/CobrosCancelados', {params: param, headers: header});
  }

  cobrosExitosos(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
        .set('solicitante', localStorage.getItem('idUsuario'));
    return this.http.get('http://localhost:49681/api/dashboard/CobrosExitosos', {params: param, headers: header});
  }

  cancelarCobro(IdCobro){
    console.log(IdCobro);
    console.log(localStorage.getItem('token'));

    const header = new HttpHeaders({
      Authorization: this.basic
    });

    const param = new HttpParams().set('IdCobro', IdCobro);

    const options = {
      headers: header,
      params: param
    };

    console.log(options);
    return this.http.post('http://localhost:49681/api/Transfer/CancelarCobro', null, options);
  }

  realizarCobro(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});

    const body = {
      // tslint:disable-next-line:radix
      idUsuarioSolicitante: parseInt(localStorage.getItem('idUsuario')),
      emailPagador: this.formModel.value.emailPagador,
      monto: this.formModel.value.monto
    };

    console.log(body);
    return this.http.post('http://localhost:49681/api/Transfer/realizarcobro', body, {headers: header});
  }
}
