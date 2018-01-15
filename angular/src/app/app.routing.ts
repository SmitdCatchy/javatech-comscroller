import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PlayComponent } from './pages/play/play.component';

import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: 'modules',  component: ModulesComponent },

  { path: 'read',  component: PlayComponent },
  { path: 'play',  component: PlayComponent },
  { path: 'read/:name',  component: PlayComponent },
  { path: 'play/:name',  component: PlayComponent },

  { path: 'editor',  component: EditorComponent },
  { path: 'editor/:name',  component: EditorComponent },

  { path: 'login',     component: LoginComponent },
  { path: 'profile',     component: AccountComponent },
  { path: 'register',     component: RegisterComponent },

  { path: '**',     redirectTo: 'modules', pathMatch: 'full' }
  // { path: '**',     redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
