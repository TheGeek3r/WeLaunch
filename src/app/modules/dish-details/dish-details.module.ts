import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishDetailsComponent } from './dish-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { UserModule } from 'app/layout/common/user/user.module';

const routes: Routes = [
  {
    path: ':id', 
    component: DishDetailsComponent
  },
  {
    path     : '**',
    component: DishDetailsComponent
  }
];

@NgModule({
  declarations: [        
    DishDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    FuseCardModule,
    UserModule
  ],
})
export class DishDetailsModule { }
