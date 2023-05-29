import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormArray} from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    
    this.miFormularioArray = this._formBuilder.group({
      nombre: '',
      apellidos: '', 
      telefonos: this._formBuilder.array([]) // inicializamos la lista de telefonos vacia
    })

  }

  // metodo getter para obtener el formArray de la lista de telefonos
  get telefonosFormulario(): FormArray {
    return this.miFormularioArray.get('telefonos') as FormArray;
  }

  // metodo para anadir telefonos a la lista
  addPhone() {
    const telefonoNuevo = this._formBuilder.group({
      prefix: '',
      numero: ''
    })

    // anadimos el grupo a la laista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  // eliminar telefonos de la lista
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index);
  }

}
