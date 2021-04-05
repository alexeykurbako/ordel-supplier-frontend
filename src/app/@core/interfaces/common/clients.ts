import {Observable} from 'rxjs';

export interface Client {
  id: string;
  name: string;
  email: string;
}

export abstract class ClientData {
  abstract getClients(): Observable<Client[]>;
}
