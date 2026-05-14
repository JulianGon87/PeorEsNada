import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Publicacion } from '../../models/publicacion.model';

/**
 * Representa visualmente la tarjeta de una publicación individual en la interfaz.
 */
@Component({
  selector: 'app-publicacion-card',
  templateUrl: './publicacion-card.component.html',
  styleUrls: ['./publicacion-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, CommonModule]
})
export class PublicacionCardComponent {
  /**
   * Recibe el modelo de datos de la publicación desde el componente padre.
   */
  @Input() publicacion!: Publicacion;

  /**
   * Emite el evento de eliminación hacia el componente padre con el identificador único.
   */
  @Output() eliminar = new EventEmitter<string>();

  /**
   * Inicializa las dependencias del componente de tarjeta.
   */
  constructor() { }

  /**
   * Captura el clic en el botón de borrar y propaga el evento de borrado.
   */
  onEliminar() {
    this.eliminar.emit(this.publicacion.id);
  }
}
