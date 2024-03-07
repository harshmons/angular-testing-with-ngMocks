import { Component} from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-add-new-product-feature',
  templateUrl: './add-new-product-feature.component.html',
  styleUrls: ['./add-new-product-feature.component.css']
})
export class AddNewProductFeatureComponent {
  isAdded = false;

  constructor(private productService: ProductService) { }

  onAddProduct(product:any) {
    this.productService.addProductToDB(product).subscribe(
      _data => {
        this.isAdded = true;
      }
    )
  }

}
