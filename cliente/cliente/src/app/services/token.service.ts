import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor(
    private authService: AuthService
  ) { }
  
    intercept(req: any, next:any) {
      const tokenReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      })
      return next.handle(tokenReq);
    }
}
