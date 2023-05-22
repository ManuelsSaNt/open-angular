import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent, children: [
    {path: 'hijo', component: HomePageComponent}
  ]},
  {path: 'login', component: LoginPageComponent},
  {path: 'contacts', component: ContactPageComponent, canActivate: [ authGuard ]},
  {path: 'contacts/:id', component: ContactDetailComponent, canActivate: [ authGuard ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
