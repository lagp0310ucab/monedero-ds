import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-operaciones',
  templateUrl: './consultar-operaciones.page.html',
  styleUrls: ['./consultar-operaciones.page.scss'],
})
export class ConsultarOperacionesPage implements OnInit {

  lista:Array<any>;
  constructor() { }

  ngOnInit() {
  }


  public probar(operaciones) {

    
    if (operaciones=="aprobadas") {
       
        this.lista=[
          {
            id: "11",
            monto: "62156849",
            fecha: "07/01/21"
          },
          {
            id: "12",
            monto: "62156849",
            fecha: "07/01/21"
           
          },
          {
            id: "12",
            monto: "62156849",
            fecha: "07/01/21"
          
          },
          {
            id: "14",
            monto: "62156849",
            fecha: "07/01/21"
           
          },
      
          {
            id: "15",
            monto: "62156849",
            fecha: "07/01/21"
          
          },
          {
            id: "16",
            monto: "62156849",
            fecha: "07/01/21"
         
          },
          {
            id: "17",
            monto: "62156849",
            fecha: "07/01/21"
         
          },
          {
            id: "18",
            monto: "62156849",
            fecha: "07/01/21"
      
          },
          {
            id: "19",
            monto: "62156849",
            fecha: "07/01/21"
      
          },
      
          {
            id: "20",
            monto: "62156849",
            fecha: "07/01/21"
      
          }
      
        ]
      }
    else
    if (operaciones=="canceladas") {
 
      this.lista=[
        {
          id: "21",
          monto: "62156849",
          fecha: "07/01/21"
        },
        {
          id: "22",
          monto: "62156849",
          fecha: "07/01/21"
         
        },
        {
          id: "23",
          monto: "62156849",
          fecha: "07/01/21"
        
        },
        {
          id: "24",
          monto: "62156849",
          fecha: "07/01/21"
         
        },
    
        {
          id: "25",
          monto: "62156849",
          fecha: "07/01/21"
        
        },
        {
          id: "26",
          monto: "62156849",
          fecha: "07/01/21"
       
        },
        {
          id: "27",
          monto: "62156849",
          fecha: "07/01/21"
       
        },
        {
          id: "28",
          monto: "62156849",
          fecha: "07/01/21"
    
        },
        {
          id: "29",
          monto: "62156849",
          fecha: "07/01/21"
    
        },
    
        {
          id: "30",
          monto: "62156849",
          fecha: "07/01/21"
    
        }
    
      ]

    }
    else
    if (operaciones=="enProceso")  {
 
         this.lista=[
          {
            id: "31",
            monto: "62156849",
            fecha: "07/01/21"
          },
          {
            id: "32",
            monto: "62156849",
            fecha: "07/01/21"
           
          },
          {
            id: "33",
            monto: "62156849",
            fecha: "07/01/21"
          
          },
          {
            id: "34",
            monto: "62156849",
            fecha: "07/01/21"
           
          },
      
          {
            id: "35",
            monto: "62156849",
            fecha: "07/01/21"
          
          },
          {
            id: "36",
            monto: "62156849",
            fecha: "07/01/21"
         
          },
          {
            id: "37",
            monto: "62156849",
            fecha: "07/01/21"
         
          },
          {
            id: "38",
            monto: "62156849",
            fecha: "07/01/21"
      
          },
          {
            id: "39",
            monto: "62156849",
            fecha: "07/01/21"
      
          },
      
          {
            id: "40",
            monto: "62156849",
            fecha: "07/01/21"
      
          }
      
        ]
        }
    else
    if(operaciones=="retenidas"){
 
       this.lista=[
        {
          id: "41",
          monto: "62156849",
          fecha: "07/01/21"
        },
        {
          id: "42",
          monto: "62156849",
          fecha: "07/01/21"
         
        },
        {
          id: "43",
          monto: "62156849",
          fecha: "07/01/21"
        
        },
        {
          id: "44",
          monto: "62156849",
          fecha: "07/01/21"
         
        },
    
        {
          id: "45",
          monto: "62156849",
          fecha: "07/01/21"
        
        },
        {
          id: "46",
          monto: "62156849",
          fecha: "07/01/21"
       
        },
        {
          id: "47",
          monto: "62156849",
          fecha: "07/01/21"
       
        },
        {
          id: "48",
          monto: "62156849",
          fecha: "07/01/21"
    
        },
        {
          id: "49",
          monto: "62156849",
          fecha: "07/01/21"
    
        },
    
        {
          id: "50",
          monto: "62156849",
          fecha: "07/01/21"
    
        }
    
      ]

      }
	}

}
