import {Routes, Router} from '@angular/router'
import { LoginComponent } from './login/login.component';

export const appRoutes : Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full'},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    // {path: 'login', component: LoginComponent},
    { path: 'main', loadChildren: './main/main.module#MainModule'  }
];