import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-recargar-tarjeta-saldo',
  templateUrl: './formulario-recargar-tarjeta-saldo.page.html',
  styleUrls: ['./formulario-recargar-tarjeta-saldo.page.scss'],
})
export class FormularioRecargarTarjetaSaldoPage implements OnInit {

  monto:number;
  confirmeMonto:number;
  constructor(public alertController: AlertController) { }

  verificar()
  {
      if (this.monto==null || this.confirmeMonto==null )  
          this.presentAlertNull();
       else
         if (this.monto!=this.confirmeMonto)  
            this.presentAlertComparar();
  
   
  }

  async presentAlertComparar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',  
      message: 'El campo monto y el campo confirme monto deben contener el mismo valor',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertNull() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',  
      message: 'Los campos monto y confirme monto son obligatorios',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  ngOnInit() {
  }

}
