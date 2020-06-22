import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-recargar-tarjeta-saldo',
  templateUrl: './formulario-recargar-tarjeta-saldo.page.html',
  styleUrls: ['./formulario-recargar-tarjeta-saldo.page.scss'],
})
export class FormularioRecargarTarjetaSaldoPage implements OnInit {

  monto:number;
  constructor(public alertController: AlertController) { }
  
  ngOnInit() {
  }
	
	/**
	 * Recargar Saldo. Método para llamada al backend.
	 */
	// TODO: Definir parámetros para este método.
	public recargarSaldo() {
		console.log('recargar');
	}
	
	/**
	 * Verificar los datos que proporcionó el usuario.
	 */
  public verificar()
  {
		if (this.monto == null)  
			this.presentAlertNull();
		else
			this.recargarSaldo();
  }
	
	/**
	 * Verificar que los campos no sean nulos.
	 */
  public async presentAlertNull() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',  
      message: 'El campo monto es obligatorio.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
