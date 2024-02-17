import { ProductService } from '../../../core/services/product/product.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {
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
