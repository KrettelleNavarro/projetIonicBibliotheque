import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

interface Livre {
  titre: string;
  auteur: string;
  domainePublic:string;
  genre: string;
  taille:0;
}

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  public livres: Livre[] = [];
  private LIVRES_STORAGE: string = "livres";
  

  constructor() { }

  public async addNewLivreToList(livre) {
    this.livres.push(livre);

    Storage.set({
      key: this.LIVRES_STORAGE,
      value: JSON.stringify(this.livres)
    });
  }
  public async loadSaved() {
    const livres = await Storage.get({ key: this.LIVRES_STORAGE });
    this.livres = JSON.parse(livres.value) || [];

    return this.livres;
  }
 
}