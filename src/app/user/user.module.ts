import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCollectionModule } from '../collections/user-collection/user-collection.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';
import { FormDependencyModule } from '../shared/form-dependency/form-dependency.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserCollectionModule,
    SharedComponentModule,
    FormDependencyModule,
  ],
})
export class UserModule {}
