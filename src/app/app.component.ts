import { Component, OnInit, ElementRef } from '@angular/core';
import { provideNavigatable, KeysService, NavigationService, PlatformService, NavigatableComponent } from '@alignedcode/tvbase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideNavigatable(AppComponent)]
})
export class AppComponent extends NavigatableComponent {
  title = 'Fitness';

  constructor(
    elementRef: ElementRef,
    keysService: KeysService,
    private navigationService: NavigationService
  ) {
    super(elementRef, null, keysService);
    this.navigationService.setRoot(this);
  }
}
