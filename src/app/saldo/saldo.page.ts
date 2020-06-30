import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { SaldoService } from '../services/saldo.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
})
export class SaldoPage implements OnInit {
	
	/** 
	 * Saldo actual del usuario.
	 */
	private saldo: number;

  constructor(private saldoService: SaldoService, private loginService: LoginService) { }

  ngOnInit() {
		this.obtenerSaldo(this.loginService.getToken(), this.loginService.getIdUsuario(), this.loginService.getAuthHeader());
  }
	
	/**
	 * Recibe los datos del Observable declarado en saldo.service.
	 */
	public async obtenerSaldo(token: string, idUsuario: string, headers: any) {
		return await this.saldoService.getSaldo(token, idUsuario, headers).subscribe((data: number) => {
			this.saldo = data
		});
	}

}
