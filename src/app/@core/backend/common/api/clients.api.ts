import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {Client} from '../../../interfaces/common/clients';

@Injectable()
export class ClientsApi {
  private readonly apiController: string = 'clients';

  constructor(private api: HttpService) {
  }

  getClients(): Observable<Client[]> {
    return this.api.get(this.apiController);
  }
}
