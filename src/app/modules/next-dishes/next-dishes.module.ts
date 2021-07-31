import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NextDishesComponent } from './next-dishes.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { MatDividerModule } from '@angular/material/divider';
import { IconsModule } from 'app/core/icons/icons.module';


const routes: Routes = [
  {
      path     : '**',
      component: NextDishesComponent
  }
];

@NgModule({
  declarations: [
    NextDishesComponent
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
    MatDialogModule,
    MatDividerModule,
    IconsModule
  ]
})
export class NextDishesModule { }
