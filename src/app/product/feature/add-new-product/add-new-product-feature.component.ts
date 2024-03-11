import { Component} from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';

/**
 * Add New Product Feature Component
 * @export
 * @class AddNewProductFeatureComponent
 * @method onAddProduct
 * @constructor
 * @member isAdded
 */
@Component({
  selector: 'app-add-new-product-feature',
  templateUrl: './add-new-product-feature.component.html',
  styleUrls: ['./add-new-product-feature.component.css']
})
export class AddNewProductFeatureComponent {
  /**
   * Class property to hold new product added flag
   */
  isAdded = false;

  /**
   * Constructor method
   * @param {ProductService} productService service for adding a product in DB
   */
  constructor(private productService: ProductService) { }

  /**
   * Method which calls the service to add the given product in DB
   * @name onAddProduct
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
