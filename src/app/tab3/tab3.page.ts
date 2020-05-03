import { Component, EventEmitter, Output } from '@angular/core';
import { LivreService, Livre, Commentaire } from '../services/livre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page  {

  mess: Commentaire = {
    nomDuCommentateur: "",
    date: new Date,
    commentaire: "",
  };
  _router: any;

  livre: Livre;

  

  constructor(
    public livreService: LivreService,
    private route:ActivatedRoute,
    private router:Router,
    private location: Location
  ) 
  {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.livre = JSON.parse(params.special);
      }
    });
  }

  ngOnInit(): void {
    
  }

  goBack(): void {
    this.location.back();
  }

  commentaireLivreById(): void{
    this.livreService.addNewCommentaireToList(this.livre.id,this.mess)
  } 



//   update(): void {
//     this.livreService.updateLivre(this.mess)
//       .subscribe((mess) => {
//         this._router.navigate( ['mess-list']);
//       });
//   }


//   saveMess(): void {
    
//   }

}