import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';

import { ServicesService } from '../services/services.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(private router: Router, private authService: ServicesService) {}

canActivate(): boolean{
  const accessToken = this.authService.getToken();
  if(accessToken){
    return true;
  } else {
    this.router.navigate(['']);
    return false;
  }
}


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot,
  //   ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   |boolean | UrlTree {
  //   return true;
  // }

}
