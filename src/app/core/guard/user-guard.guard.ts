import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private router: Router) { }
  
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // if (currentUser && currentUser.role === 'admin') {
    //   return true;
    // }

    let currentUser = sessionStorage.getItem('token');
    if (currentUser && currentUser === 'user') {
      return true;
    }

    // not logged in as admin so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
