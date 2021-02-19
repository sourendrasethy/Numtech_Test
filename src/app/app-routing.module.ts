import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmpdashBoardComponent} from "./empdash-board/empdash-board.component";
import {LoginComponent} from "./login/login.component";
import {EmpDetailsComponent} from "./emp-details/emp-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'empdashBoard',
    component: EmpdashBoardComponent
  },
  {
    path: 'empdashBoard/:id',
    component: EmpDetailsComponent
  },
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
