import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';import{RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { UserService } from './services/user.service';
import { SceneService } from './services/scene.service';
import { ModuleService } from './services/module.service';
import { EditorService } from './services/editor.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { AccountComponent } from './pages/account/account.component';
import { ModuleComponent } from './pages/module/module.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DropdownmenuComponent } from './components/header/dropdownmenu/dropdownmenu.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PlayComponent } from './pages/play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModulesComponent,
    AccountComponent,
    ModuleComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DropdownmenuComponent,
    NavigationComponent,
    EditorComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    SceneService,
    ModuleService,
    EditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
