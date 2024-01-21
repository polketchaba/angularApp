import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { BodyComponent } from './MyComponents/body/body.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { FbcComponent } from './MyComponents/fbc/fbc.component';
import { ServiceoffersComponent } from './MyComponents/serviceoffers/serviceoffers.component';
import { ProjectWorkComponent } from './MyComponents/project-work/project-work.component';
import { PricingComponent } from './MyComponents/pricing/pricing.component';
import { HappyclientsComponent } from './MyComponents/happyclients/happyclients.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { NewsletterComponent } from './MyComponents/newsletter/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FbcComponent,
    ServiceoffersComponent,
    ProjectWorkComponent,
    PricingComponent,
    HappyclientsComponent,
    ContactusComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
