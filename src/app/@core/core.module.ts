import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAuthModule} from '@nebular/auth';

import {throwIfAlreadyLoaded} from './module-import-guard';

import {CommonBackendModule} from './backend/common/common-backend.module';
import {BackendModule} from './backend/backend.module';


export const NB_CORE_PROVIDERS = [
  ...CommonBackendModule.forRoot().providers,
  ...BackendModule.forRoot().providers,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
