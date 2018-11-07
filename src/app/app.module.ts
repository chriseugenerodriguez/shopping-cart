import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// RELATED
import { AppComponent } from './app.component';

// SHARED
import { HeaderModule } from './layout/shared/header/header.module';
import { FooterModule } from './layout/shared/footer/footer.module';

// PAGES
import { HomeModule } from './layout/pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // SHARED
    HeaderModule,
    FooterModule,

    // PAGES
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
