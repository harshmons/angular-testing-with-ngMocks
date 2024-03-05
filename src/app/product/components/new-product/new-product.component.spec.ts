import { mockForm } from '../../../mocks';
import { EMPTY, Subject } from 'rxjs';
import { ProductService } from '../../../core/services/product/product.service';
import { NewProductComponent } from './new-product.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { FormsModule, NgModel,NgForm } from "@angular/forms";
import { MatInput, MatInputModule } from "@angular/material/input";
import { FeatureModule } from '../../feature/feature.module';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { SharedModule } from '../../../shared/shared.module';
import { Component } from '@angular/core';

describe('NewProductComponent', () => {
  let addProductToDB$: Subject<any>;
  beforeEach(() => MockBuilder(NewProductComponent, FeatureModule)
    .keep(FormsModule)
    .keep(MatInput)
    // .keep(MatSelect)
    // .keep(MatOption)
    // .mock(MatOptionModule)
    // .mock(MatSelectModule)
    // .keep(SharedModule)
    // .keep(MatOption)
  );


  it('should be defined', () => {
    // ACT
    const fixture = MockRender(NewProductComponent);
    
    // ASSERT
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should test the Title control to be defined', () => {
    MockRender(NewProductComponent);
    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    expect(ngMocks.get(titleInputEl, MatInput, undefined)).toBeDefined();
    expect(ngMocks.get(titleInputEl, NgModel, undefined)).toBeDefined();
  });

  it('should update the form value on chainging the Title', () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    
    // ACT
    ngMocks.change(titleInputEl, 'cool cap');
    
    // ASSERT
    expect(component.addForm.value.title).toBe('cool cap')
  });

  it('should update the form value on chainging the Price', () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const priceInputEl = ngMocks.find(['data-testid', 'priceControl']);
    
    // ACT
    ngMocks.change(priceInputEl, '1');
    
    // ASSERT
    expect(component.addForm.value.price).toBe('1')
  });

  it('should update the form value on chainging the Description', () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const descriptionInputEl = ngMocks.find(['data-testid', 'descControl']);
    
    // ACT
    ngMocks.change(descriptionInputEl, 'Sample description');
    
    // ASSERT
    expect(component.addForm.value.description).toBe('Sample description')
  });

  it('should update the form value on chainging the Image', () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const imageInputEl = ngMocks.find(['data-testid', 'imageControl']);
    
    // ACT
    ngMocks.change(imageInputEl, 'Sample image link');
    
    // ASSERT
    expect(component.addForm.value.image).toBe('Sample image link')
  });

  it.skip('should update the form value on chainging the Category', () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const categoryControlValueEl = ngMocks.find(['data-testid', 'categoryControlValue1']);
    
    // ACT
    console.log(">>>>>>>>>>",categoryControlValueEl.attributes)
    ngMocks.trigger(categoryControlValueEl,'click')
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      console.log("FORM VALUE FROM THEN---",component.addForm.value);
    })
    // categoryControlValueEl.nativeElement.selectOption(select, 'electronics');
    // ngMocks.trigger(categoryControlValueEl, 'click');
    // console.log("REVAL",ngMocks.reveal(MatOption))
    // console.log("FORM VALUE ---",component.addForm.value);
    // // ASSERT
    // expect(component.addForm.value.category).toBe('electronics')
  });

  it("Should emit the changed data after clicking the submit button",async ()=>{
    // ARRANGE
    const fixture = MockRender(NewProductComponent,{
      addProduct:jest.fn()
    });
    fixture.detectChanges();
    await fixture.whenStable(); // Needed so that form gets ready and we can call the setValue method on it
    const newProduct = {
      title:'Sample Title',
      price:'Sample Price',
      description:'Sample Description',
      image:'Sample Image Link',
      category:'electronics'
    }
    fixture.point.componentInstance.addForm.setValue(newProduct)
    let emittedData;
    fixture.point.componentInstance.addProduct.subscribe((data)=>{
      emittedData=data;
    });
    
    // ACT
    const submitButtonEl = ngMocks.find(['data-testid', 'submit-button']);
    ngMocks.trigger(submitButtonEl,'submit');
    fixture.detectChanges();
    
    // ASSERT
    expect(emittedData).toEqual(newProduct)
  })
  

  it('should reset the form data on resetInput value as true',async () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent,{
      resetInput:false
    });
    const component = fixture.point.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable(); // Needed so that form gets ready and we can call the setValue method on it
    const newProduct = {
      title:'Sample Title',
      price:'Sample Price',
      description:'Sample Description',
      image:'Sample Image Link',
      category:'electronics'
    }
    component.addForm.setValue(newProduct)
    
    // ACT
    fixture.componentInstance.resetInput = true;
    fixture.detectChanges()

    // ASSERT
    expect(component.addForm.value).toEqual({
      title:null,
      price:null,
      description:null,
      image:null,
      category:null,
    })

  });

  it('should not reset the form data on resetInput value as false',async () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable(); // Needed so that form gets ready and we can call the setValue method on it
    const newProduct = {
      title:'Sample Title',
      price:'Sample Price',
      description:'Sample Description',
      image:'Sample Image Link',
      category:'electronics'
    }
    component.addForm.setValue(newProduct)
    
    // ACT
    fixture.componentInstance.resetInput = false;
    fixture.detectChanges()

    // ASSERT
    expect(component.addForm.value).toEqual(newProduct)
  });

});