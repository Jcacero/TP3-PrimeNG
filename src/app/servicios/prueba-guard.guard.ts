import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root' //proveedor por defecto del modulo raiz
})
export class PruebaGuardGuard implements CanActivate {
  constructor(private login:LoginService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login.login()){
      //retorna un booleane que esta en el metodo login del servicio
      return true
    }
    else{
      alert("Salí de acá no tenes permiso para entrar , no te hagas el loco")
      this.router.navigateByUrl("/")
      return false
    }
  }
  
}
