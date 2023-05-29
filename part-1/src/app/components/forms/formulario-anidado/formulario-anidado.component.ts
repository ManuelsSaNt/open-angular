import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// formnbuilder

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoComponent implements OnInit{

  miForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void{

    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })

    const telefonoMovil = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })
  
    this.miForm = this.formBuilder.group({
      fijo: telefonoFijo,
      movil: telefonoMovil
    })
  
  
  }


}
