import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [AuthService, AuthGuard, UserService, ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
