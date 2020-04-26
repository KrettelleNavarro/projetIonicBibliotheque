import { Component, EventEmitter, Output } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page  {

  mess= {
    id: null,
    message: '',
    user_id: 1,
    created_at: null,
    updated_at: null,
    deleted_at:null
  };

  constructor(
    public livreService: LivreService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  saveMess(): void {
    
  }

}