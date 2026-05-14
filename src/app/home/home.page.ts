import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonFab, IonFabButton, IonIcon, AlertController, ToastController, IonRefresher, IonRefresherContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { PublicacionService } from '../services/publicacion';
import { Publicacion } from '../models/publicacion.model';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PublicacionListComponent } from '../components/publicacion-list/publicacion-list.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

/**
 * Representa la página principal que muestra el listado de publicaciones.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonHeader, IonToolbar, IonTitle,
    CommonModule, RouterModule, 
    PageHeaderComponent, PublicacionListComponent
  ],
})
export class HomePage {
  /**
   * Almacena el arreglo de publicaciones cargadas desde el almacenamiento.
   */
  publicaciones: Publicacion[] = [];

  /**
   * Inicializa las dependencias e inyecta los servicios necesarios.
   * Agrega el ícono de suma para el botón flotante.
   * @param publicacionService Servicio que maneja los datos.
   * @param alertController Controlador nativo para ventanas modales de confirmación.
   * @param toastController Controlador nativo para notificaciones fugaces (Toasts).
   */
  constructor(
    private readonly publicacionService: PublicacionService,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController
  ) {
    addIcons({ add });
  }

  /**
   * Ejecuta la carga de datos cada vez que la vista entra en pantalla.
   */
  async ionViewWillEnter() {
    await this.cargarPublicaciones();
  }

  /**
   * Obtiene la lista de publicaciones desde el servicio de persistencia.
   */
  async cargarPublicaciones() {
    this.publicaciones = await this.publicacionService.getPublicaciones();
  }

  /**
   * Actualiza el listado al realizar el gesto "pull-to-refresh".
   * @param event Evento disparado por IonRefresher.
   */
  async manejarRefresco(event: any) {
    await this.cargarPublicaciones();
    event.target.complete();
  }

  /**
   * Despliega una alerta modal de confirmación y borra el registro si el usuario acepta.
   * Al finalizar, notifica del éxito mediante un Toast.
   * @param id Identificador de la publicación a eliminar.
   */
  async confirmarEliminacion(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar esta publicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            await this.publicacionService.deletePublicacion(id);
            await this.cargarPublicaciones();
            this.mostrarToast('🗑️ Publicación eliminada');
          }
        }
      ]
    });

    await alert.present();
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
      color: 'dark'
    });
    await toast.present();
  }
}
