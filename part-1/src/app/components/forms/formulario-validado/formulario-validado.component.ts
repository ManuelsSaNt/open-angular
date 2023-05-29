import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoComponent implements OnInit{

  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(): void{

    this.miFormularioValidado = this._formBuilder.group({
      // campo obligatorio
      nombre: ['', Validators.required],
      apellidos: '',
      // obligatorio y con max y min value
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // oblifatiorio y con expresion regular
      password:  ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      // campo booleano con true como obligatorio
      acepta: [false, Validators.requiredTrue]
    })
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }

  get apellido(){
    return this.miFormularioValidado.get('apellido');
  }

  get edad(){
    return this.miFormularioValidado.get('edad');
  }

  get email(){
    return this.miFormularioValidado.get('email');
  }

  get password(){
    return this.miFormularioValidado.get('password');
  }

  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  // metodo para el submit
  enviarFormulario(): void{

    // controlar que el form sea valido
    if (this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      // resetear los campos del formulario
      this.miFormularioValidado.reset();
    }

  }

}
