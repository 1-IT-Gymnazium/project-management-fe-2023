import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DefaultComponent } from './layout/default/default.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    {
        path: '', component: DefaultComponent, children: [
            { path: 'register', component: RegisterPageComponent, title: 'Registrace' },
            { path: 'login', component: LoginPageComponent, title: 'Login' },
            { path: 'home', component: IndexPageComponent, title: 'Home' },
        ]
    },
];
