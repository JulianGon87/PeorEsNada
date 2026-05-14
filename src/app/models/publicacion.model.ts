/**
 * Define la estructura de datos para una publicación o aviso.
 */
export interface Publicacion {
  /** Identificador único generado por fecha */
  id: string;
  /** Título principal de la publicación */
  titulo: string;
  /** Descripción detallada del aviso */
  descripcion: string;
  /** Fecha de creación en formato ISO string */
  fecha: string;
  /** Cadena opcional que almacena la imagen en base64 */
  fotoBase64?: string;
}
