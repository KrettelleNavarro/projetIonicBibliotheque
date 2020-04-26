import { Component } from '@angular/core';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  livres = [];

  constructor(
    public livreService: LivreService
  ) {}
  ngOnInit() {
    this.livreService.loadSaved().then(livres => this.livres = livres);
  }

}
