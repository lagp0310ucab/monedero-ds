import { Component, OnInit } from '@angular/core';

import { SaldoService } from '../services/saldo.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recargar-cuenta-bancaria',
  templateUrl: './recargar-cuenta-bancaria.page.html',
  styleUrls: ['./recargar-cuenta-bancaria.page.scss'],
})
export class RecargarCuentaBancariaPage implements OnInit {

  constructor(private saldoService: SaldoService, private loginService: LoginService) { }

	private cuentas: any;
	
  ngOnInit() {
		this.obtenerCuentas(this.loginService.getToken(), this.loginService.getIdUsuario(), this.loginService.getAuthHeader());
  }
	
	/**
	 * Obtener las cuentas del usuario.
	 */
	public async obtenerCuentas(token: string, idUsuario: string, headers: any) {
		return await this.saldoService.obtenerCuentas(token, idUsuario, headers).subscribe((data: any) => {
			this.cuentas = data
		});
	}

}
