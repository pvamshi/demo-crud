import { Tenant } from './app.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getEntities, getAction } from 'ngrx-crud';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private tenantStore: Store<State<Tenant>>) {
    this.tenantStore.select(getEntities(Tenant)).subscribe(console.log);
  }
  public ngOnInit() {
    this.tenantStore
      .select(getEntities(Tenant))
      .filter((tenants: Tenant[]) => tenants === null)
      .subscribe(() => {
        this.tenantStore.dispatch(
          getAction(Tenant).getLoadSuccessAction({ id: '0', name: 'First' })
        );
      });
  }
}
