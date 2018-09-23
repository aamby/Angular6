import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login-page/login.module';
import { AppRoutingModule, appRouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: appRouteComponents,
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    LoginModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
