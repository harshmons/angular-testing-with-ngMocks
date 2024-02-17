import { mockForm } from './../../../mocks';
import { EMPTY, Subject } from 'rxjs';
import { ProductService } from './../../../core/services/product/product.service';
import { AddNewProductComponent } from './add-new-product.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from "../../../app.module";
import { FormsModule, NgModel } from "@angular/forms";
import { MatInput } from "@angular/material/input";

describe('AddNewProductComponent', () => {
  let addProductToDB$: Subject<any>;
  beforeEach(() => MockBuilder(AddNewProductComponent, AppModule)
    .mock(ProductService, {
      addProductToDB: () => addProductToDB$
    })
    .keep(FormsModule)
    .keep(MatInput)
  );

  beforeEach(() => {
    addProductToDB$ = new Subject();
  })

  it('should be defined', () => {
    const fixture = MockRender(AddNewProductComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })

});