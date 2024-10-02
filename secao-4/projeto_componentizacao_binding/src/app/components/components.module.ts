import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent,
    ],
    exports: [
        CardComponent,
    ],
})
export class ComponentsModule { }