import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{


  // definimos el formulario
  miFormulario: FormGroup = new FormGroup({});


  // inyectamos la clase de formbuilder
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

    // iniciamos los campos del formulario

    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );


    // nos suscribimos a lo cambios que ocurran en el formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe(
      console.log
    )


  }

}
