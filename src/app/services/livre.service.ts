import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { Observable } from 'rxjs';

const { Camera, Filesystem, Storage } = Plugins;


export interface Livre {
  id: number;
  titre: string;
  auteur: string;
  domainePublic:string;
  genre: string;
  taille:0;
  commentaires: Commentaire[];
}
export interface Commentaire {
  nomDuCommentateur: string;
  date: Date;
  commentaire: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  public livres: Livre[] = [];
  public commentaire: Commentaire[] = [];
  private LIVRES_STORAGE: string = "livres";
  public cptLivre: number;
  updateLivre: any;
  

  constructor(  ) { }

    public async addNewLivreToList(livre) {
      this.cptLivre = Number((await Storage.get({ key: "cpt" })).value) || 0;
      livre.id = this.cptLivre++;
      this.livres.push(livre);

      Storage.set({
        key: this.LIVRES_STORAGE,
        value: JSON.stringify(this.livres)
        
      });
      // for simulation bdd id auto increment
      Storage.set({
        key: "cpt",
        value: this.cptLivre.toString()
      });
      // -----------------------------------
      return this.livres;
    }
    

    public async addNewCommentaireToList(livre_id, commentaire) {
      this.livres.find(livre=>livre.id===livre_id).commentaires.push(commentaire);

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
    
