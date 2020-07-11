import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCollectionComponent } from './user-collection.component';
import { MatDependencyModule } from 'src/app/shared/mat-dependency/mat-dependency.module';
import { UserCollectionItemComponent } from './user-collection-item/user-collection-item.component';
import { RouterModule } from '@angular/router';
import { FormDependencyModule } from 'src/app/shared/form-dependency/form-dependency.module';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';

@NgModule({
  declarations: [UserCollectionComponent, UserCollectionItemComponent],
  imports: [CommonModule, MatDependencyModule, RouterModule],
  exports: [UserCollectionComponent, UserCollectionItemComponent],
})
export class UserCollectionModule {}
