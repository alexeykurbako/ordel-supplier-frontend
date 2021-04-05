import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Client, ClientData} from '../../../interfaces/common/clients';
import {ClientsApi} from '../api/clients.api';

@Injectable()
export class ClientsService extends ClientData {
  constructor(private api: ClientsApi) {
    super();
  }

  getClients(): Observable<Client[]> {
    return this.api.getClients();
  }
}
