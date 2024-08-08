import { NoopAnimationsModule} from "@angular/platform-browser/animations"
import { FormsModule} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectHarness } from "@angular/material/select/testing"
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed"
import { NewProductComponent } from './new-product.component';
import { MatSelectModule } from "@angular/material/select";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockBuilder, MockRender } from "ng-mocks";

describe('Component : NewProduct : Using Test Bed', () => {

  let loader: HarnessLoader;
  let fixture:ComponentFixture<NewProductComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [FormsModule,MatSelectModule,MatInputModule,NoopAnimationsModule], declarations: [NewProductComponent]})
        .compileComponents();
    fixture = TestBed.createComponent(NewProductComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });


  it('Component Harness : should update the form value on chainging the 1st Category', async () => {
    // ARRANGE
    const selectCategory = await loader.getHarness(MatSelectHarness)

    // ACT
    await selectCategory.open();
    const options = await selectCategory.getOptions()
    await options[0].click();

    // ASSERT
    expect(fixture.componentInstance.addForm.value.category).toBe('electronics')
  });
});

describe('Component : NewProduct : Using NgMocks', () => {

  let loader: HarnessLoader;
  let fixture:ComponentFixture<NewProductComponent>;


  beforeEach(() => MockBuilder(NewProductComponent)
  .keep(FormsModule)
  .keep(MatInputModule)
  .keep(MatSelectModule)
  .keep(NoopAnimationsModule,{export:true})
);


  it('Component Harness : should update the form value on chainging the 1st Category', async () => {
    // ARRANGE
    const fixture = MockRender(NewProductComponent);
    loader = await TestbedHarnessEnvironment.loader(fixture);

    const selectCategory = await loader.getHarness(MatSelectHarness)

    // ACT
    await selectCategory.open();
    const options = await selectCategory.getOptions()
    await options[0].click();

    // ASSERT
    expect(fixture.componentInstance.addForm.value.category).toBe('electronics')
  });
});
