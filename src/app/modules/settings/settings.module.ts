import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { FriendsComponent } from './friends/friends.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'app/shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';

export const settingsRoutes: Route[] = [
  {
      path     : '',
      component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    SecurityComponent,
    FriendsComponent
  ],
  imports: [
    RouterModule.forChild(settingsRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    SharedModule,
    MatTooltipModule
  ]
})
export class SettingsModule { }
