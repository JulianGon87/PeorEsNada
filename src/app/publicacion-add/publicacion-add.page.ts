import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, ToastController } from '@ionic/angular/standalone';
import { PublicacionService } from '../services/publicacion';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PublicacionFormComponent } from '../components/publicacion-form/publicacion-form.component';

/**
 * Gestiona la página de creación para nuevas publicaciones.
 * Delega la lógica de captura al componente PublicacionFormComponent.
 */
@Component({
  selector: 'app-publicacion-add',
  templateUrl: './publicacion-add.page.html',
  styleUrls: ['./publicacion-add.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule, PageHeaderComponent, PublicacionFormComponent
  ]
})
export class PublicacionAddPage {

  /**
   * Construye el componente inyectando el servicio, enrutador y controlador de notificaciones.
   * @param publicacionService Servicio encargado de persistir los datos.
   * @param router Enrutador para navegar entre vistas tras guardar.
   * @param toastController Controlador para mostrar notificaciones flotantes.
   */
  constructor(
    private readonly publicacionService: PublicacionService,
    private readonly router: Router,
    private readonly toastController: ToastController
  ) {}

  /**
   * Procesa la solicitud de guardado de la publicación emitida por el componente hijo.
   * Envía los datos al servicio, notifica éxito y redirige al usuario hacia el inicio.
   * @param evento Objeto que contiene los datos validados del formulario.
   */
  async manejarGuardado(evento: {titulo: string, descripcion: string, fotoBase64?: string}) {
    const fecha = new Date().toISOString();
    
    await this.publicacionService.addPublicacion({
      titulo: evento.titulo,
      descripcion: evento.descripcion,
      fecha,
      fotoBase64: evento.fotoBase64
    });

    await this.mostrarToast('✅ Publicación creada exitosamente');
    this.router.navigate(['/home']);
  }

  /**
   * Muestra un mensaje flotante temporal en pantalla.
   * @param mensaje El texto que mostrará el Toast.
   */
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }
}
