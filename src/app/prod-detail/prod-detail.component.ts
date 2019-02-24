import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {
product:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }
  home(){
	  this.router.navigateByUrl('articles/');
  }
  

}
