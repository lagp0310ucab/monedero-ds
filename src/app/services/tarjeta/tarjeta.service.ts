import { Injectable } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Tarjeta} from '../../models/tarjeta';
import { Reintegro} from '../../models/reintegro';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  tarjetas: Tarjeta[] = [];

  reintegro: Reintegro;

  constructor(private http: HttpClient, private form: FormBuilder) { }

  formModel = this.form.group({
    idUsuarioSolicitante : [0, Validators.required],
    idMedioPaga : [0, Validators.required],
    monto : [0, Validators.required],
    idOperacion : [0, Validators.required]
  });

  // Da la informacion de la tarjeta que tiene un usuario
  obtenerTarjetas(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('IdUsuario', localStorage.getItem('idUsuario'));
    return this.http.get('http://localhost:49681/api/Dashboard/Tarjetas', {params: param, headers: header});
  }

  // Crea un reintegro
  crearReintegro(reintegroactivo){
    this.reintegro = reintegroactivo;
    console.log(this.reintegro);
  }

  // Abre la peticion para realizar un reintegro desde una tarjeta.
  tarjetaReintegro(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    const monto = this.reintegro.monto;
    const body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      // tslint:disable-next-line:radix
      idMedioPaga: parseInt(this.formModel.value.idMedioPaga),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);
    return this.http.post('http://localhost:49681/api/transfer/RealizarReintegroTarjeta', body, {headers: header});
  }

  // Abre la peticion para realizar un reintegro desde una cuenta.
  cuentaReintegro(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    const monto = this.reintegro.monto;
    const body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      // tslint:disable-next-line:radix
      idMedioPaga: parseInt(this.formModel.value.idMedioPaga),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);
    return this.http.post('http://localhost:49681/api/transfer/RealizarReintegroCuenta', body, {headers: header});
  }

  // Abre la peticion para realizar un reintegro desde un monedero.
  monederoReintegro(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    const monto = this.reintegro.monto;
    const body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      // tslint:disable-next-line:radix
      idMedioPaga: parseInt(localStorage.getItem('idUsuario')),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);

    return this.http.post('http://localhost:49681/api/transfer/RealizarReintegroMonedero', body, {headers: header});
  }

}
