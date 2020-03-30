import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TVBaseModule } from '@alignedcode/tvbase';

import { AppComponent } from './app.component';
import { HttpGateway } from './services/http-gateway.service';
import { EnvironmentService } from './services/environment.service';
import { PlatformService, WebOsPlatform, TizenPlatform, DesktopPlatform} from '@alignedcode/tvbase';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing';

@NgModule({
  declarations: [
    AppComponent
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
    platformService.add(DesktopPlatform);
}
}
