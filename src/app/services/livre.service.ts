import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { Observable } from 'rxjs';

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
  updateLivre: any;
  

  constructor(
    //private http: HttpClient
  ) { }

  /** Version Node */
  private urlNode = 'http://127.0.0.1:3000';

  // getMess(): Observable<Mess[]> {
  //   return this.http.get<Mess[]>(this.urlNode+"/mess");
  // }

  // getMess(messId): Observable<Mess> {
  //   return this.http.get<Mess>(this.urlNode+"/mess/"+messId);
  // }

  // saveMess(mess: Mess): Observable<Mess> {
  //   return this.http.post<Mess>(this.urlNode+"/mess", mess);
  // }

  // deleteMess(mess: Mess): Observable<Mess> {
  //   return this.http.delete<Mess>(this.urlNode+"/mess/" + mess.id);
  // }

  // updateMess(mess: Mess): Observable<Mess> {
  //   return this.http.patch<Mess>(this.urlNode+"/tw/" + mess.id, mess);
  //}

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
