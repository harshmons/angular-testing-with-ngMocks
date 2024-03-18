import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * This component is used to add a new product.
 * It takes all the required inputs from the user and on click of Submit button
 * It emits the entered data through output property
 *  
 * Usage example: 
 * @example
 * <app-new-product (addProduct)="handler($event)" [resetInput]="boolean True/False" ></app-new-product>
*/
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnChanges {
  /**
   * Used to reset the input fields
   */
  @Input() resetInput = false;

  /**
   * Hold the form values
   */
  @ViewChild('f') addForm: NgForm;

  /**
   * Emits the entered form data by user to its parent component
   */
  @Output() addProduct = new EventEmitter();

  /**
   * Angular Life Cycle method
   * @param changes Contains the changes found during angular chage detection
   */
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['resetInput'].currentValue)
      this.addForm.resetForm()
  }

  /**
   * Method used to dispatch the entered form data by user
   * @param form Contains all the form values mapped using Template Driven form
   */
  onSubmit(form: NgForm) {
    const product = form.value;
    this.addProduct.emit(product);
  }

}
