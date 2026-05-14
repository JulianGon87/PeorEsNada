import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonNote } from '@ionic/angular/standalone';
import { ImagePickerComponent } from '../image-picker/image-picker.component';

/**
 * Agrupa los campos reactivos de entrada de datos y valida la información
 * antes de emitirla hacia el componente contenedor superior.
 */
@Component({
  selector: 'app-publicacion-form',
  templateUrl: './publicacion-form.component.html',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, 
    IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonNote,
    ImagePickerComponent
  ]
})
export class PublicacionFormComponent {
  /**
   * Agrupa los controles y estados de validación del formulario.
   */
  publicacionForm: FormGroup;

  /**
   * Mantiene temporalmente la fotografía antes de guardarla.
   */
  fotoBase64: string | undefined;

  /**
   * Emite un objeto consolidado con los datos válidos hacia la página principal.
   */
  @Output() guardar = new EventEmitter<{titulo: string, descripcion: string, fotoBase64?: string}>();

  /**
   * Inicializa las dependencias y construye las reglas de validación.
   * @param formBuilder Servicio de Angular para construir formularios.
   */
  constructor(private readonly formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  /**
   * Recibe la cadena Base64 emitida por el componente hijo de selección de imagen.
   * @param foto Cadena codificada en Base64.
   */
  actualizarFoto(foto: string) {
    this.fotoBase64 = foto;
  }

  /**
   * Evalúa la validez del formulario y propaga los datos hacia arriba si son correctos.
   */
  submitForm() {
    if (this.publicacionForm.valid) {
      const { titulo, descripcion } = this.publicacionForm.value;
      this.guardar.emit({
        titulo,
        descripcion,
        fotoBase64: this.fotoBase64
      });
      // Permite que la página controle el enrutamiento o reseteo posterior.
    }
  }
}
