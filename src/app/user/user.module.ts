import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes';

import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  providers: []
})
export class UserModule {}
