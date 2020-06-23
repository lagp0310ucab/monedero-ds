import { Component, OnInit } from '@angular/core';

import { OperacionesService } from '../services/operaciones.service';

@Component({
  selector: 'app-formulario-operaciones',
  templateUrl: './formulario-operaciones.page.html',
  styleUrls: ['./formulario-operaciones.page.scss'],
})
export class FormularioOperacionesPage implements OnInit {

  private operaciones: Array<any>;
	private subscription;
	
  constructor(private operacionesService: OperacionesService) {
		this.subscription = this.operacionesService.getLista().subscribe(lista => this.operaciones = lista);
	}

  ngOnInit() {
  }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
}
