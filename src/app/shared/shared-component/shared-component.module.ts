import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from '../../modals/user-modal/user-modal.component';
import { FormDependencyModule } from '../form-dependency/form-dependency.module';

@NgModule({
  declarations: [UserModalComponent],
  imports: [CommonModule, FormDependencyModule],
  exports: [UserModalComponent],
  entryComponents: [UserModalComponent],
})
export class SharedComponentModule {}
