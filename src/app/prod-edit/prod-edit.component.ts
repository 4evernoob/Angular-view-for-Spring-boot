import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {
product:any;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	   this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }
  updateProduct():Observable<any>{
   return this.rest.updateProduct(this.route.snapshot.params['id'], this.product).pipe((result) => {
      this.router.navigate(['articles/']);
    }, (err) => {
      console.log(err);
    });
	this.router.navigate(['articles/'])
  }
  home(){
	  this.router.navigateByUrl('articles/');
  }
}
