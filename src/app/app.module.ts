import { getReducerr, StoreGeneratorModule } from 'ngrx-crud';
import { Tenant, User } from './app.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, Inject } from '@angular/core';

import {
  StoreModule,
  ActionReducerMap,
  Action,
  ActionReducer
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

export function getEntitiesList() {
  return ['Tenant', 'User', 'Vamshi'];
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreGeneratorModule.forRoot(getEntitiesList),
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
