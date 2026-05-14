import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline, folderOpenOutline } from 'ionicons/icons';

/**
 * Representa un estado visual vacío cuando no existen datos para mostrar.
 */
@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  standalone: true,
  imports: [CommonModule, IonIcon, IonLabel]
})
export class EmptyStateComponent {
  /**
   * Recibe el mensaje principal a desplegar en pantalla.
   */
  @Input() mensaje: string = 'No hay información disponible.';

  /**
   * Recibe el nombre del icono de Ionicons a renderizar.
   */
  @Input() icono: string = 'folder-open-outline';

  /**
   * Inicializa las dependencias e inyecta los iconos necesarios.
   */
  constructor() {
    addIcons({ alertCircleOutline, folderOpenOutline });
  }
}
