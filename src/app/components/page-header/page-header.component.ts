import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

/**
 * Representa la cabecera reutilizable de las páginas de la aplicación.
 * Permite mantener un diseño consistente y reducir la duplicación de código en las vistas.
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, CommonModule]
})
export class PageHeaderComponent {
  /**
   * Recibe el título que se muestra en la cabecera de la página.
   * Utiliza el decorador Input para permitir la inyección de datos desde el componente padre.
   */
  @Input() titulo: string = '';

  /**
   * Determina si se muestra el botón de retroceso en la barra de navegación.
   * Por defecto es falso.
   */
  @Input() mostrarBotonAtras: boolean = false;

  /**
   * Define la ruta por defecto a la que regresa el botón de atrás.
   */
  @Input() rutaAtras: string = '/home';

  /**
   * Inicializa el componente de cabecera.
   */
  constructor() { }
}
