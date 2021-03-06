import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface User {
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  login: string;
  picture: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
}

export abstract class UserData {
  abstract get gridDataSource(): DataSource;
  abstract getCurrentUser(): Observable<User>;
  abstract list(pageNumber: number, pageSize: number): Observable<User[]>;
  abstract get(id: number): Observable<User>;
  abstract update(user: User): Observable<User>;
  abstract updateCurrent(user: User): Observable<User>;
  abstract create(user: User): Observable<User>;
  abstract delete(id: number): Observable<boolean>;
}
