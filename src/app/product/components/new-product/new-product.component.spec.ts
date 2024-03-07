import { Subject } from 'rxjs';
import { NewProductComponent } from './new-product.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { FormsModule, NgModel } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { ProductFeatureModule } from '../../feature/product-feature.module';

describe('NewProductComponent', () => {
  
  beforeEach(() => MockBuilder(NewProductComponent, ProductFeatureModule)
    .keep(FormsModule)
    .keep(MatInput)
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
    // NOTE - Below code doesn't work same way as mat-input testing block works,because
    // 1. Angular material uses animation and mat-select works on that
    // 2. Angular material team suggest to use Harness but that is more towards integration testing
    // So, better would to test this in 2 parts, which again not gives the complete confidence from end user prespective, as we are not testing the binding of Mat Select with template form object 
    // a. Test the rendered HTML with correct options
    // b. Test the submit method, calls the follow-up method with form values  
    
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    const component = fixture.point.componentInstance;
    const electronicsCategoryControlValueEl = ngMocks.find(['data-testid', 'categoryControlValue1']);
    
    // ACT
    ngMocks.trigger(electronicsCategoryControlValueEl,'click')
    fixture.detectChanges();
    
    // ASSERT
    expect(component.addForm.value.category).toBe('electronics')
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