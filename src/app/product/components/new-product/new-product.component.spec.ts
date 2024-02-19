import { mockForm } from '../../../mocks';
import { EMPTY, Subject } from 'rxjs';
import { ProductService } from '../../../core/services/product/product.service';
import { NewProductComponent } from './new-product.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from "../../../app.module";
import { FormsModule, NgModel } from "@angular/forms";
import { MatInput } from "@angular/material/input";

describe('NewProductComponent', () => {
  let addProductToDB$: Subject<any>;
  beforeEach(() => MockBuilder(NewProductComponent, AppModule)
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
    const fixture = MockRender(NewProductComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should test the Title control to be defined', () => {
    MockRender(NewProductComponent);
    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    expect(ngMocks.get(titleInputEl, MatInput, undefined)).toBeDefined();
    expect(ngMocks.get(titleInputEl, NgModel, undefined)).toBeDefined();
  });

  it('should test the Title control on change', () => {
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;

    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    ngMocks.change(titleInputEl, 'cool cap');
    expect(component.addForm.value.title).toBe('cool cap')
  });

  // it('should test onSubmit functionality', () => {
  //   const fixture = MockRender(NewProductComponent);
  //   const prodService = ngMocks.findInstance(ProductService);
  //   const spy = jest.spyOn(prodService, 'addProductToDB');
  //   const component = fixture.point.componentInstance;
  //   let formData;
  //   component.addProduct.subscribe(data=>{
  //     console.log("------------------",data);
  //     formData = data;
  //   })
  //   component.onSubmit(mockForm as any);
  //   // fixture.detectChanges();
  //   expect(formData).toBe(mockForm);
  // })

  // it('should reset the form and show the alert upon onSubmit', () => {

  //   const fixture = MockRender(NewProductComponent);
  //   const component = fixture.point.componentInstance;
  //   const formSpy = jest.spyOn(component.addForm, 'resetForm');
  //   component.onSubmit(mockForm as any);
  //   addProductToDB$.next(EMPTY);
  //   expect(formSpy).toHaveBeenCalled();

  // });

});