import { Component } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    livre = {
      id:null,
      auteur: null,
      titre: null,
      genre: null,
      domaine: null,
      pages: null,
      commentaires: [],
    }
  

  constructor(public livreService: LivreService,
    private router:Router
    ) {}

      logForm() {
      this.livreService.addNewLivreToList(this.livre);

      this.livre = {
        id : null,
        auteur : null,
        titre:null,
        genre:null,
        domaine:null,
        pages:null,
        commentaires: [],
      };
      
      this.router.navigate(['/'])
    }

  }
