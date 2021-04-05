import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Client, ClientData} from '../interfaces/common/clients';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class ClientStore {
  readonly clients$: Observable<Client[]> =
    this.clientsData.getClients()
      .pipe(
        shareReplay(1),
      );

  constructor(private clientsData: ClientData) {
  }
}
