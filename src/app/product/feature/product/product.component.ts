import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../core/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params['id'];
    this.productDetails$ = this.productService.getProductById(routeId);
  }

}
