import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Publicacion } from '../models/publicacion.model';
/**
 * Provee métodos asíncronos para almacenar y recuperar las publicaciones localmente
 * usando Capacitor Preferences (SharedPreferences en Android).
 */
@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  /**
   * Llave constante que identifica la colección de datos en el dispositivo.
   */
  private readonly STORAGE_KEY = 'avisos_peor_es_nada';

  /**
   * Inicializa el servicio de gestión de datos.
   */
  constructor() {}

  /**
   * Recupera el listado completo de publicaciones desde el almacenamiento local.
   * @returns Una promesa que resuelve con un arreglo de publicaciones.
   */
  async getPublicaciones(): Promise<Publicacion[]> {
    const { value } = await Preferences.get({ key: this.STORAGE_KEY });
    if (value) {
      return JSON.parse(value);
    }
    return [];
  }

  /**
   * Añade una nueva publicación al principio de la lista existente y guarda los cambios.
   * Asigna dinámicamente un ID único a partir del tiempo actual.
   * @param publicacion Objeto de publicación sin identificador.
   */
  async addPublicacion(publicacion: Omit<Publicacion, 'id'>): Promise<void> {
    const publicaciones = await this.getPublicaciones();
    const nuevaPublicacion: Publicacion = {
      ...publicacion,
      id: Date.now().toString(),
    };
    publicaciones.unshift(nuevaPublicacion);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(publicaciones),
    });
  }

  /**
   * Elimina un registro específico basado en su identificador único y actualiza el almacenamiento.
   * @param id Cadena de texto correspondiente al ID de la publicación.
   */
  async deletePublicacion(id: string): Promise<void> {
    const publicaciones = await this.getPublicaciones();
    const nuevasPublicaciones = publicaciones.filter((p) => p.id !== id);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(nuevasPublicaciones),
    });
  }
}
