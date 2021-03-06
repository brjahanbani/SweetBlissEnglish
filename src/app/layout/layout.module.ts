import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, AuthenticationModule],
})
export class LayoutModule {}
