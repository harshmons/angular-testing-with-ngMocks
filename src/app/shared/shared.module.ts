import { NgModule } from "@angular/core";
import { HighlightDirective } from "./directives/highlight.directive";
import { MaterialModule } from "./material.module";
import { RoundOffPricePipe } from "./pipes/round-off-price.pipe";

@NgModule({
    declarations:[HighlightDirective,RoundOffPricePipe],
    exports:[HighlightDirective,MaterialModule,RoundOffPricePipe],
    imports:[MaterialModule]
})
export class SharedModule{}