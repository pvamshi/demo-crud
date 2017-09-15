import StoreModel from 'ngrx-crud';

export class User implements StoreModel {
  id: string;
  name: string;
  isEquals(user: User): boolean {
    return user.id === this.id;
  }
}

export class Tenant implements StoreModel {
  id: string;
  name: string;
  isEquals(tenant: Tenant): boolean {
    return tenant.id === this.id;
  }
}
