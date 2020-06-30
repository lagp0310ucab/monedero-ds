import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpClient, private loginService: LoginService) { }
	
  ngOnInit() {
		const response: Observable<any> = this.http.get('http://localhost:49683/api/Dashboard/InformacionPersona?Usuario='
		+ this.loginService.getUsername(),
		{
			headers: this.loginService.getAuthHeader()
		});
		
		let that = this;
		const suscription = response.subscribe({
			next(res) {
				that.loginService.updateIdUsuario(res.result.idUsuario);
			},
			async error(msg) {
				console.log('Error: ', msg);
			}
		});
  }

}
