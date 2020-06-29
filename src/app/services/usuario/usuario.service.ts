import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private form: FormBuilder) { }

  formModel = this.form.group({
    usuario : ['', Validators.required],
    email : ['', Validators.required, Validators.email],
    telefono : ['', Validators.required],
    direccion : ['', Validators.required],
    idUsuario : [0, Validators.required]
  });

  getDatosUsuario(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const param = new HttpParams().set('Usuario', localStorage.getItem('email'));
    const url = 'http://localhost:49681/api/Dashboard/InformacionPersona';
    return this.http.get(url, {params: param, headers: header});
  }

  registrar(registerForm) {
    return this.http.post('http://localhost:49681/api/Authentication/Register', registerForm);
  }

  iniciarSesion(loginForm){
    return this.http.post('http://localhost:49681/api/Authentication/Login', loginForm);
  }

  modificarUsaurio(){
    const header = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    const body = {
      usuario: localStorage.getItem('usuario'),
      email : localStorage.getItem('email'),
      telefono : this.formModel.value.telefono,
      direccion: this.formModel.value.direccion,
      // tslint:disable-next-line:radix
      idUsuario: parseInt(localStorage.getItem('idUsuario'))
    };
    return this.http.post('http://localhost:49681/api/Authentication/Modification', body , {headers: header});
  }
}
