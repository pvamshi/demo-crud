import { Tenant, User } from './app.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { StoreModule, State, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { getReducer } from 'ngrx-crud';

export const tenantReducerToken = new InjectionToken<
  ActionReducerMap<State<Tenant>>
>('Tenant Registered Reducers');
export const tenantReducer = getReducer(Tenant.name);

export const userReducerToken = new InjectionToken<
  ActionReducerMap<State<User>>
>('User Registered Reducers');
export const userReducer = getReducer(User.name);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(Tenant.name, tenantReducerToken),
    StoreModule.forFeature(User.name, userReducerToken),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: tenantReducerToken,
      useValue: tenantReducer
    },
    {
      provide: userReducerToken,
      useValue: userReducer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
