import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPaths } from './app-paths';
import { environment } from 'environments/environment';

import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: AppPaths.PLAYER,
    // TODO 
    component: PlayerComponent
  },
  {
    path: AppPaths.HOME,
    // TODO 
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: `/${AppPaths.HOME}`,
    pathMatch: 'full'
  }
];

// tslint:disable-next-line: max-line-length
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {enableTracing: !environment.production, useHash: true});
