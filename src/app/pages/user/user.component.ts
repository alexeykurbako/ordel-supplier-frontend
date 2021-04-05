/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserData} from '../../@core/interfaces/common/users';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  readonly currentUser$: Observable<any> = this.usersService.getCurrentUser();

  constructor(private router: Router, private usersService: UserData) {
  }

  back() {
    this.router.navigate(['/orders']);
  }
}
