import {  inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Token } from '@angular/compiler';

export const authGuard: CanActivateFn = () => {
  const router=inject(Router)
  const auth=inject(AuthService)
//
  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
  }
  return auth.isLoggedIn();
  // return true;
};
