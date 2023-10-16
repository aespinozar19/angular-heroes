import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const canActivePublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.checkAuthentication().pipe(
    tap(( isAuthenticated ) => {
      if ( isAuthenticated ) {
        router.navigate(['./']);
      }
    }),
    map( isAuthenticated => !isAuthenticated ),
  );
};

export const canMatchPublic: CanMatchFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthentication().pipe(
    tap(( isAuthenticated ) => {
      if ( isAuthenticated ) router.navigate(['./']);
    }),
    map( isAuthenticated => !isAuthenticated ),
  );
};
