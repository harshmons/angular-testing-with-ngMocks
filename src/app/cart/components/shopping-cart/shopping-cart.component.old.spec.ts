import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { mockCart } from '../../../mocks';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('Component : ShoppingCart', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShoppingCartComponent
      ],
    }).compileComponents();
  });
  
  it('should be defined', () => {
    // ARRANGE
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    const component = fixture.componentInstance;

    // ASSERT
    expect(component).toBeDefined();
  })

  it("should map the cart item properties in the DOM if input is given",()=>{
    // ARRANGE
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.componentInstance.item = mockCart;
    fixture.detectChanges()
    
    // ASSERT
    const imageEl = fixture.debugElement.query(By.css('[data-testid="product-image"][src="' + mockCart.image + '"]')).nativeElement
    expect(imageEl).toBeDefined();
    
    const titleEl = fixture.debugElement.query(By.css('[data-testid="product-title"]')).nativeElement
    expect(titleEl.textContent).toMatch(mockCart.title);
    
    const productCategoryPriceEl = fixture.debugElement.query(By.css('[data-testid="product-category-price"]')).nativeElement
    expect(productCategoryPriceEl.textContent).toMatch(mockCart.category);
    expect(productCategoryPriceEl.textContent).toMatch(mockCart.price.toString());

    const productQuantityEl = fixture.debugElement.query(By.css('[data-testid="product-quantity"]')).nativeElement
    expect(productQuantityEl.textContent).toMatch(mockCart.quantity.toString());
  })
})