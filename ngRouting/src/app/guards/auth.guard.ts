import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  if (sessionStorage.getItem('token') === '1'){
    return true;
  }else {
    return false;
  }
};
