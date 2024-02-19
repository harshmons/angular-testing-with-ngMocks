import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnChanges {
  @Input() resetInput = false;
  @ViewChild('f') addForm: NgForm;

  @Output() addProduct = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['resetInput'].currentValue)
      this.addForm.resetForm()
  }
  onSubmit(form: NgForm) {
    const product = form.value;
    this.addProduct.emit(product);
  }

}
