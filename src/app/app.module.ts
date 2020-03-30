import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpGateway } from './services/http-gateway.service';
import { EnvironmentService } from './services/environment.service';
import {
  TVBaseModule,
  PlatformService,
  WebOsPlatform,
  TizenPlatform,
  DesktopPlatform,
  NetcastPlatform,
  OrsayPlatform,
  AmazonFireTvPlatform
} from '@alignedcode/tvbase';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TVBaseModule,
    routing
  ],
  providers: [
    HttpGateway,
    EnvironmentService,
    PlatformService,
    DesktopPlatform,
    WebOsPlatform,
    TizenPlatform
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(platformService: PlatformService) {
    platformService.add(WebOsPlatform);
    platformService.add(TizenPlatform);
    platformService.add(NetcastPlatform);
    platformService.add(OrsayPlatform);
    platformService.add(AmazonFireTvPlatform);
    platformService.add(DesktopPlatform);
  }
}
