import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import{Article} from'../article';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {
artic = new Article();

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  
  }
  addNew(){
	
	  if(this.artic.title!== '' &&this.artic.category!==''){
		  
	  this.rest.addProduct(this.artic);
	  this.router.navigate(['articles/']);
	  }
	  else{
		  console.log('errore');
}
		  
	  }
	  home(){
	  this.router.navigateByUrl('articles/');
  }
	  
  }

