import { Component } from '@angular/core';
import { LivreService, Livre  } from '../services/livre.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  livres = [];

  constructor(
    public livreService: LivreService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.livreService.loadSaved().then(livres => this.livres = livres);
  }
  gototab3 (livre:Livre){
    console.log (livre)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(livre)
      }
    };
    this.router.navigate(['/tabs/tab3'], navigationExtras);
  }

}
