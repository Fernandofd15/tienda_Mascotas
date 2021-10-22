import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TiendaModule {
  constructor(_id="", strNombre="", strDireccion="", strTelefono="",
              strUrlWeb="", arrAnimalitosDisponibles=[],aJsnCompra=[],
             ){
              this._id=_id;
              this.strNombre=strNombre;
              this.strDireccion=strDireccion;
              this.strTelefono=strTelefono;
              this.strUrlWeb=strUrlWeb;
              this.arrAnimalitosDisponibles=arrAnimalitosDisponibles;
              this.aJsnCompra=aJsnCompra;

  } 
  _id:String;
  strNombre:String;
  strDireccion:String;
  strTelefono:String;
  strUrlWeb:String;
  arrAnimalitosDisponibles:Array<any> ;
  aJsnCompra:Array<any>;
 

}
