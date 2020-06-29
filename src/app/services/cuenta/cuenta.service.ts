import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  // Nos dice di la cuenta es ahorro, corriente, etc
  obtenerTipoCuenta(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:49681/api/Dashboard/TiposCuentas', {headers: header});
  }

  // devuelve informacion de la tabla banco
  obtenerBanco(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:49681/api/Dashboard/Bancos', {headers: header});
  }

  // Devuelve la cuentas almacenadas en la tabla Cuentas
  obtenerCuentas(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'));
    return this.http.get('http://localhost:49681/api/Dashboard/cuentas', {params: param, headers: header});
  }
}
