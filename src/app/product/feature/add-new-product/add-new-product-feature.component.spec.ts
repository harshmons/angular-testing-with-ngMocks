import { Subject } from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ProductService } from '../../../core/services/product/product.service';
import {mockForm} from "../../../mocks"
import { NewProductComponent } from '../../components';
import { ProductFeatureModule } from '../product-feature.module';
import { AddNewProductFeatureComponent } from './add-new-product-feature.component';

describe('Component : AddNewProductFeature', () => {
  let addProductToDB$: Subject<any>;
  
  beforeEach(() => {
    addProductToDB$ = new Subject();
  })
  
  beforeEach(() => MockBuilder(AddNewProductFeatureComponent, ProductFeatureModule)
    .mock(ProductService, {
      addProductToDB: jest.fn().mockReturnValue(addProductToDB$)
    }).keep(NewProductComponent)
  );


  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ASSERT
    expect(fixture.point.componentInstance).toBeDefined();
  })

  
  it('should render success message when isAdded is true ', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = true;
    fixture.detectChanges();
    
    // ASSERT
    const successEl = ngMocks.find(fixture,'[data-testid="success-message"]')
    expect(successEl).toBeDefined();
  })

  it('should not render success message when isAdded is false', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = false;
    fixture.detectChanges();

    // ASSERT
    const successEl = ngMocks.find(fixture,'[data-testid="success-message"]',null)
    expect(successEl).toBeNull();
  })

  it('should set false as input property for NewProductComponent if isAdded is false', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = false;
    fixture.detectChanges();

    // ASSERT
    const addNewProductComponentEl = ngMocks.findInstance(fixture,AddNewProductFeatureComponent)
    expect(addNewProductComponentEl.isAdded).toBeFalsy();
  })

  it('should set true as input property for NewProductComponent if isAdded is true', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = true;
    fixture.detectChanges();

    // ASSERT
    const addNewProductComponentEl = ngMocks.findInstance(fixture,AddNewProductFeatureComponent)
    expect(addNewProductComponentEl.isAdded).toBeTruthy();
  })

  it('should call onAddProduct method with correct input if addProduct event is raised from NewProductComponent', () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    const addNewProductComponentEl = ngMocks.findInstance(fixture,AddNewProductFeatureComponent)
    addNewProductComponentEl.onAddProduct(mockForm)
    fixture.detectChanges();
    const productService = fixture.point.injector.get(ProductService);
    
    // ASSERT
    expect(productService.addProductToDB).toHaveBeenCalledTimes(1);
    expect(productService.addProductToDB).toHaveBeenCalledWith(mockForm);
  })

  it('should set isAdded to true if addProductToDB Service method returns the data',async () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = false;
    fixture.componentInstance.onAddProduct('');
    addProductToDB$.next('Dummy Data');
    
    // ASSERT
    expect(fixture.componentInstance.isAdded).toBeTruthy();
  })

  it('should not change the value for isAdded to true if addProductToDB Service method returns error',async () => {
    // ARRANGE
    const fixture = MockRender(AddNewProductFeatureComponent);
    
    // ACT
    fixture.componentInstance.isAdded = false;
    fixture.componentInstance.onAddProduct('');
    addProductToDB$.error('');
    
    // ASSERT
    expect(fixture.componentInstance.isAdded).toBeFalsy();
  })
});