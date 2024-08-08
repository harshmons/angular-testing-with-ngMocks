// import 'jest-preset-angular/setup-jest';
import { ngMocks } from 'ng-mocks';
ngMocks.autoSpy('jest');

// injection token - ie something that is injected into the constructor
// of a component or another service as a dependency

// Added because while writing test case for mat select using component harness,
// It is giving the error in console.Git conversation suggested this approach.
// https://github.com/telerik/kendo-angular/issues/1505. This might not come in higher versions of Angular Material
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
      getPropertyValue: (prop:any) => {
          return '';
      }
  })
});

// jest.setTimeout(30000);


