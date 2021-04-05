import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../@components/components.module';


@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    CommonModule,
  ],
  exports: [ComponentsModule, ComponentsModule],
})
export class SharedModule {
}
