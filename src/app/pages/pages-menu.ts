import {NbMenuItem} from '@nebular/theme';
import {NbAccessChecker} from '@nebular/security';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class PagesMenu {

  constructor(private accessChecker: NbAccessChecker) {
  }

  getMenu(): Observable<NbMenuItem[]> {
    const menu = [];

    return this.accessChecker.isGranted('view', 'users')
      .pipe(
        map(hasAccess => {
          if (hasAccess) {
            return [...menu];
          } else {
            return [...menu];
          }
        }),
      );
  }
}
