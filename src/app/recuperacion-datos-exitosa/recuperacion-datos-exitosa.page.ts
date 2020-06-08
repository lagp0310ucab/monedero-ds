import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recuperacion-datos-exitosa',
  templateUrl: './recuperacion-datos-exitosa.page.html',
  styleUrls: ['./recuperacion-datos-exitosa.page.scss'],
})
export class RecuperacionDatosExitosaPage implements OnInit {

	private email: string;
	private subscription;
	
  constructor(private loginService: LoginService) {
		this.subscription = this.loginService.getEmail().subscribe(email => this.email = email);
	}

  ngOnInit() {
  }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
}
