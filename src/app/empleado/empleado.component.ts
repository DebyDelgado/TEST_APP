import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:["<p>Acá iría un empleado</p>"] componente inline
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color: blueviolet; }"] componente inline
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Diaz";

  edad=18;

  empresa="Vagabond";


  /*
  private edad=18;
  getEdad(){

    return this.edad;
  } */
  
  usuRegister=false;

  txtRegis="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuRegister=false;

  }

  setuserCheckRegis(event:Event){

    //alert("El usuario está registrado");

    //this.txtRegis="El user se acaba de registrar";

    if((<HTMLInputElement>event.target).value=="si"){

      this.txtRegis="El user se acaba de registrar";

    }
    else {
      this.txtRegis="No hay nadie registrado";
    }



  }

  llamaEmpresa(value:string){


  }

  constructor() { }

  ngOnInit(): void {
  }

}
