import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteredComponent } from './registered/registered.component';


const routes: Routes = [
  {
        path: "",
        redirectTo: "register",
        pathMatch: "full"
      },
      {
        path: "register",
        component: RegisteredComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
