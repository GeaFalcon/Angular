import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  // template: " <div>Buenas</div>",
  // styles: [
  //     'p{background: red}'
  //   ]
})
export class EmpleadoComponent {

  nombre = "Jose";
  apellido = "Diaz";
  edad = 28;
  valueCheck = false;
  testValue = true;

  llamaTest(value:String){
  }
  validacionCheck(){
    this.valueCheck = true
  }
}
