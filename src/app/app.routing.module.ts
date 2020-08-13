import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [
  {
  path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports:
    [
      RouterModule.forRoot(AppRoutes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }