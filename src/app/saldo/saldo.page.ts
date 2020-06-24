import { Component, OnInit } from '@angular/core';

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

  constructor(private saldoService: SaldoService) { }

  ngOnInit() {
  }
	
	/**
	 * Recibe los datos del Observable declarado en saldo.service.
	 */
	public async obtenerSaldo() {
		return await this.saldoService.getSaldo().subscribe((data: number) => {
			this.saldo = data
		});
	}

}
