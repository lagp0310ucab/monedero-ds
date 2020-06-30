import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public alertController: AlertController, private http: HttpClient, private router: Router) { }
	
	public httpOptions = {
		headers: new HttpHeaders({
			'Authorization': 'Bearer '
		})
	};
	
	getAuthHeader(): any {
		return this.httpOptions.headers;
	}
	
	updateAuthHeader(nuevoAuth: string) {
		this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + nuevoAuth);
	}
	
	private datosUsuario: any;
	
	getNombreUsuario(): any {
		return this.datosUsuario.nombre;
	}
	
	getApellidoUsuario(): any {
		return this.datosUsuario.apellido;
	}
	
	getTelefonoUsuario(): any {
		return this.datosUsuario.telefono;
	}
	
	getDireccionUsuario(): any {
		return this.datosUsuario.direccion;
	}
	
	getDatosUsuario(): any {
		return this.datosUsuario;
	}
	
	updateDatosUsuario(nuevosDatos: any) {
		this.datosUsuario = nuevosDatos;
	}
	
	private username: string;
	
	updateUsername(nuevoUser: string) {
		this.username = nuevoUser;
	}
	
	getUsername(): string {
		return this.username;
	}
	
	// https://www.intersysconsulting.com/blog/angular-components/
	private email = new Subject<string>();
	
	updateEmail(nuevoEmail: string) {
		this.email.next(nuevoEmail);
	}
	
	getEmail(): Observable<string> {
		return this.email.asObservable();
	}
	
	// Token obtenido del login del usuario para acciones subyacentes.
	private token: string;
	
	getToken(): string {
		return this.token;
	}
	
	updateToken(nuevoToken: string) {
		this.token = nuevoToken;
	}
	
	// ID de usuario obtenido del login del usuario para acciones subyacentes.
	private idUsuario: string;
	
	getIdUsuario(): string {
		return this.idUsuario;
	}
	
	updateIdUsuario(nuevoIdUsuario: string) {
		this.idUsuario = nuevoIdUsuario;
	}

  // TODO: Definir Regexp.
  private EMAIL_REGEXP = '';
  private PASSWORD_REGEXP = '';

  /**
   * Se encarga de llamar al backend para hacer el login.
   */
  public login(usuario: string, email: string, password: string) {
		//console.log(usuario, email, password, comercio);
	  // Parametro se mandan por el Body
		const response: Observable<any> = this.http.post('http://66.42.95.58/api/Authentication/Login', {
			'usuario': usuario,
			'email': email,
			'password': password,
			'comercio': false
		});

		this.updateUsername(usuario);
		
		let that = this;
		const suscription = response.subscribe({
			next(res) {
				that.updateToken(res.result.token);
				that.updateAuthHeader(res.result.token);
				//that.updateIdUsuario(res.result.userID);
				that.router.navigate(['/tabs/home']);
			},
			async error(msg) {
				console.log('Error en el login: ', msg);
				const alert = await this.alertController.create({
					header: 'Error',
					message: 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.',
					buttons: [
						{
							text: 'Entendido',
							role: 'cancel'
						}
					]
				});

				await alert.present();
			}
		});
		
		/*if(response) {
			this.updateToken(response.result.token);
			this.updateAuthHeader(response.result.token);
			this.updateIdUsuario(response.result.userID);
			this.router.navigate(['/tabs/home']);
		} else {
			console.log('Error en el login.');
			const alert = await this.alertController.create({
				header: 'Error',
				message: 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.',
				buttons: [
					{
						text: 'Entendido',
						role: 'cancel'
					}
				]
			});

			await alert.present();
		}*/
  }

  /**
   * Valida los campos antes de enviarlos al backend para hacer el login.
   */
  public async validarCampos(usuario: string, email: string, password: string) {
		// TODO: Validar con expresiones regulares.
    if (usuario && email && password) {
      this.login(usuario, email, password);
    } else {
			const alert = await this.alertController.create({
				header: 'Campos Vacíos',
				message: 'Por favor, rellene todos los campos.',
				buttons: [
					{
						text: 'Entendido',
						role: 'cancel'
					}
				]
			});

			await alert.present();
		}
  }
	
	/**
	 * Recuperar datos de usuario. 
	 */
	public async recuperarDatos(email: string) {
		if(!email) {
			const alert = await this.alertController.create({
				header: 'Campo Vacío',
				message: 'Por favor, rellene todos los campos.',
				buttons: [
					{
						text: 'Entendido',
						role: 'cancel'
					}
				]
			});

			await alert.present();
		}
		
		// Actualizar el valor de email para pasarlo a los componentes que lo requieren.
		this.updateEmail(email);
		
		console.log('Recuperar Datos.');
	}

}
