import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EMPTY } from 'rxjs';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { AppModule } from './../../../app.module';
import { ProductService } from './product.service';
import { mockProducts, mockProduct } from '../../../mocks';

describe('Service: Product', () => {
  beforeEach(() => {
    return MockBuilder(ProductService, AppModule).replace(
      HttpClientModule,
      HttpClientTestingModule
    );
  });

  it('should get all the products on calling getAllProducts method', () => {
    // ARRANGE
    const service = ngMocks.findInstance(ProductService);
    const httpMock = ngMocks.findInstance(HttpTestingController);
    let actual: any;
    
    // ACT
    service.getAllProducts().subscribe((products) => (actual = products));
    const req = httpMock.expectOne('/products');
    req.flush(mockProducts);
    httpMock.verify();
    
    // ASSERT
    expect(req.request.method).toEqual('GET');
    expect(actual).toEqual(mockProducts);
  });

  it('should get all the single product on calling getProductById method', () => {
    // ARRANGE
    const service = ngMocks.findInstance(ProductService);
    const httpMock = ngMocks.findInstance(HttpTestingController);
    let actual: any;
    
    // ACT
    service.getProductById(1).subscribe((value) => (actual = value));
    const req = httpMock.expectOne('/products/1');
    req.flush(mockProduct);
    httpMock.verify();

    // ASSERT
    expect(req.request.method).toEqual('GET');
    expect(actual).toEqual(mockProduct);
  });

  it('should add the product on calling addProductToDB method', () => {
    // ARRANGE
    const service = ngMocks.findInstance(ProductService);
    const httpMock = ngMocks.findInstance(HttpTestingController);
    let actual: any;
    
    // ACT
    service.addProductToDB(mockProduct).subscribe((value) => (actual = value));
    const req = httpMock.expectOne('/products');
    req.flush(EMPTY);
    httpMock.verify();

    // ASSERT
    expect(req.request.method).toEqual('POST');
    expect(actual).toEqual(EMPTY);
  });
});
