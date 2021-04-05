import {Component, OnDestroy} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {NbTokenService} from '@nebular/auth';
import {NbMenuItem} from '@nebular/theme';
import {PagesMenu} from './pages-menu';
import {ProductStore} from '../@core/stores/product.store';
import {OrderStore} from '../@core/stores/order.store';
import {ClientStore} from '../@core/stores/client.store';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  providers: [ProductStore, OrderStore, ClientStore],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(private pagesMenu: PagesMenu,
              private tokenService: NbTokenService,
  ) {
    this.initMenu();

    this.tokenService.tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
      });
  }

  initMenu() {
    this.pagesMenu.getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
