import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { GoShoppingComponent } from './go-shopping/go-shopping.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddItemsComponent } from './add-items/add-items.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
      path     : ':id',
      component: ShoppingListComponent 
  },
  {
      path     : '**',
      component: ShoppingListComponent
  }
];

@NgModule({
  declarations: [
    ShoppingListComponent,
    GoShoppingComponent,
    ShoppingHistoryComponent,
    AddItemsComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FuseNavigationModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  exports: [MatSidenavModule]
})
export class ShoppingListModule { }
