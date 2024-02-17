import { NgModule } from "@angular/core";
import { HighlightDirective } from "./directives/highlight.directive";
import { MaterialModule } from "./material.module";

@NgModule({
    declarations:[HighlightDirective],
    exports:[HighlightDirective,MaterialModule],
    imports:[MaterialModule]
})
export class SharedModule{}