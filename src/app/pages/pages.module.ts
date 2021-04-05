import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {PagesMenu} from './pages-menu';
import {NbCardModule, NbMenuModule} from '@nebular/theme';
import {AuthModule} from '../@auth/auth.module';
import {UserComponent} from './user/user.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  UserComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    AuthModule.forRoot(),
    NbCardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    PagesMenu,
  ],
})
export class PagesModule {
}
