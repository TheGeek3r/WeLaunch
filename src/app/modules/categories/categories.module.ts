import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
      path     : '**',
      component: CategoriesComponent
  }
];

@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, 
    ReactiveFormsModule,

    MatButtonToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FuseCardModule,
    MatDialogModule
  ]
})
export class CategoriesModule { }
