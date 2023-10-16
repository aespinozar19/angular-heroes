import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

// const checkAuthStatus2 = (): boolean | Observable<boolean> => {
//   //se inyectan el AuthService y el Router
//   const authService: AuthService = inject(AuthService);
//   const router: Router = inject(Router);

//   return authService.checkAuthentication().pipe(
//     tap((isAuthenticated) => {
//       if (!isAuthenticated) {
//         router.navigate(['/auth/login']);
//       }
//     })
//   );
// };

export const canActive2: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.checkAuthentication().pipe(
    tap(( isAuthenticated ) => {
      if ( !isAuthenticated ) {
        router.navigateByUrl('/auth/login');
      }
    })
  );
};

export const canMatch2: CanMatchFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthentication().pipe(
    tap(( isAuthenticated ) => {
      if ( !isAuthenticated ) router.navigateByUrl('/auth/login');
    })
  );
};
