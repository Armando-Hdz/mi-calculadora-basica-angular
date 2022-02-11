import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'App Calculadora';
  
  resultadoPadre:number;

  procesarResultado (resultado: number){
    this.resultadoPadre = resultado;
  }
  /*operandoB: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  } */
}
