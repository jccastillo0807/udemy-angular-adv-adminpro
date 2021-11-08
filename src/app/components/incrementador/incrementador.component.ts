import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
 
  ngOnInit() {
   this.colorBtnClass=`btn ${this.colorBtnClass}`;
  }


  @Input('valorEntrada') progreso: number = 40;
  @Input('valorClaseBtn') colorBtnClass: String = 'btn-primary';

  @Output('valorSalida') valorSalida: EventEmitter<number> = new EventEmitter();

  /* get getPorcentaje() {
    return `${this.progreso}%`;
  }
 */
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100)
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }
    this.valorSalida.emit(this.progreso + valor)
    return this.progreso = this.progreso + valor;
  }

  onChange(inputVal: any){
console.log(inputVal);
  }


}
