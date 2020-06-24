import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(public alertController: AlertController,
							private datosService: DatosService) { }

  ngOnInit() {
  }
	
	/**
	 * Le presenta una confirmación al usuario antes de cerrar sesión.
	 */
	public async alertCerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Está seguro de que desea cerrar la sesión?',
      buttons: [
				{
          text: 'Cancelar',
          role: 'cancel'
        }, 
				{
          text: 'Cerrar Sesión',
          handler: () => {
						this.datosService.cerrarSesion();
          }
        }
			]
    });

    await alert.present();
  }

}
