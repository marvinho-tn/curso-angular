import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
})
export class ComponentsModule { }