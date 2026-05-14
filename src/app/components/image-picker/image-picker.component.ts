import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera, TakePhotoOptions, CameraDirection } from '@capacitor/camera';
import { IonButton, IonImg } from '@ionic/angular/standalone';

/**
 * Encapsula la lógica de integración con la cámara del dispositivo utilizando Capacitor.
 * Utiliza la API moderna de @capacitor/camera v8+ (takePhoto).
 */
@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  standalone: true,
  imports: [CommonModule, IonButton, IonImg]
})
export class ImagePickerComponent {
  /**
   * Recibe una cadena Base64 preexistente para mostrar una previsualización inicial.
   */
  @Input() fotoPreview: string | undefined;

  /**
   * Emite la nueva cadena Base64 hacia el formulario padre cuando se toma una foto exitosamente.
   */
  @Output() fotoTomada = new EventEmitter<string>();

  /**
   * Inicializa el selector de imágenes.
   */
  constructor() { }

  /**
   * Acciona la cámara nativa, captura la imagen y propaga el resultado en Base64.
   * Utiliza Camera.takePhoto de la API moderna de Capacitor v8+.
   */
  async tomarFoto() {
    try {
      const options: TakePhotoOptions = {
        quality: 90,
        correctOrientation: true,
        cameraDirection: CameraDirection.Rear
      };

      const mediaResult = await Camera.takePhoto(options);

      if (mediaResult.webPath) {
        const response = await fetch(mediaResult.webPath);
        const blob = await response.blob();
        const base64Str = await this.blobToBase64(blob);
        this.fotoPreview = base64Str;
        this.fotoTomada.emit(base64Str);
      } else if (mediaResult.thumbnail) {
        const base64Str = `data:image/jpeg;base64,${mediaResult.thumbnail}`;
        this.fotoPreview = base64Str;
        this.fotoTomada.emit(base64Str);
      }
    } catch (error) {
      console.error('Error al capturar imagen', error);
    }
  }

  /**
   * Convierte un Blob a cadena Base64 con prefijo data URI.
   * @param blob Objeto binario de la imagen.
   */
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
