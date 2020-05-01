import { Component, EventEmitter, Output } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page  {

//   mess:Mess= {
//     id: null,
//     message: '',
//     user_id: 1,
//     created_at: null,
//     updated_at: null,
//     deleted_at:null
//   };
//   _router: any;

//   constructor(
//     public livreService: LivreService,
//     private route:ActivatedRoute,
//     private router:Router,
//     private location: Location
//   ) { }

//   ngOnInit(): void {
//     const messId = +this.route.snapshot.paramMap.get('messId');

//     this.livreService.getMess(messId)
//       .subscribe(mess => this.mess = mess);
//   }

//   goBack(): void {
//     this.location.back();
//   }

//   update(): void {
//     this.livreService.updateLivre(this.mess)
//       .subscribe((mess) => {
//         this._router.navigate( ['mess-list']);
//       });
//   }


//   saveMess(): void {
    
//   }

}