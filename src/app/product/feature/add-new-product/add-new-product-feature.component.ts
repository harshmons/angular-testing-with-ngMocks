import { Component} from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';

/**
 * Add New Product Feature Component
 * @export
 * @class AddNewProductFeatureComponent
 * @method onAddProduct
 */
@Component({
  selector: 'app-add-new-product-feature',
  templateUrl: './add-new-product-feature.component.html',
  styleUrls: ['./add-new-product-feature.component.css']
})
export class AddNewProductFeatureComponent {
  /**
   * @member
   */
  isAdded = false;

  /**
   * @constructor
   * @param productService 
   */
  constructor(private productService: ProductService) { }

  /**
   * Method which calls the service to add the given product in DB
   * @param product
   */
  onAddProduct(product:any) {
    this.productService.addProductToDB(product).subscribe(
      _data => {
        this.isAdded = true;
      }
    )
  }

}
