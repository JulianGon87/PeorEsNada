import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList } from '@ionic/angular/standalone';
import { Publicacion } from '../../models/publicacion.model';
import { PublicacionCardComponent } from '../publicacion-card/publicacion-card.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

/**
 * Gestiona y muestra una lista completa de publicaciones iterando sobre ellas.
 * Demuestra la correcta división de componentes delegando cada ítem a PublicacionCard.
 */
@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  standalone: true,
  imports: [IonList, CommonModule, PublicacionCardComponent, EmptyStateComponent]
})
export class PublicacionListComponent {
  /**
   * Recibe el arreglo de publicaciones desde el componente padre.
   * Emplea el decorador Input para establecer la comunicación descendente.
   */
  @Input() publicaciones: Publicacion[] = [];

  /**
   * Emite el identificador de la publicación que el usuario solicita eliminar.
   * Emplea el decorador Output para establecer la comunicación ascendente.
   */
  @Output() eliminar = new EventEmitter<string>();

  /**
   * Inicializa el componente de lista de publicaciones.
   */
  constructor() { }

  /**
   * Propaga el evento de eliminación capturado desde la tarjeta hacia el componente contenedor principal.
   * @param id Identificador único de la publicación a borrar.
   */
  eliminarItem(id: string) {
    this.eliminar.emit(id);
  }
}
