import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserData} from '../../interfaces/common/users';
import {UsersService} from './services/users.service';
import {UsersApi} from './api/users.api';
import {HttpService} from './api/http.service';
import {NbAuthModule} from '@nebular/auth';
import {ClientData} from '../../interfaces/common/clients';
import {ClientsService} from './services/clients.service';
import {ClientsApi} from './api/clients.api';

const API = [UsersApi, ClientsApi, HttpService];

const SERVICES = [
  {provide: UserData, useClass: UsersService},
  {provide: ClientData, useClass: ClientsService},

];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
