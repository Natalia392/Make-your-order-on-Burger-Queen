import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// No es necesario importar Router, ActivatedRoute, ni ParamMap aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookComponent } from './components/cook/cook.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AdminComponent } from './components/admin/admin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CookComponent,
    WaiterComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
