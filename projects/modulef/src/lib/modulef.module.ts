import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModulefComponent } from './modulef.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: ModulefComponent
      }
    ])
  ],
  declarations: [ModulefComponent],
  exports: [ModulefComponent]
})
export class ModulefModule { }
