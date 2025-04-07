export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}

export enum Permission {
  READ_PRODUCTS = "READ_PRODUCTS",
  WRITE_PRODUCTS = "WRITE_PRODUCTS",
  READ_ORDERS = "READ_ORDERS",
  WRITE_ORDERS = "WRITE_ORDERS",
  READ_CUSTOMERS = "READ_CUSTOMERS",
  WRITE_CUSTOMERS = "WRITE_CUSTOMERS",
  MANAGE_USERS = "MANAGE_USERS",
}

export interface User {
  id: string;
  name?: string;
  firstName?: string;
  mail: string;
  password?: string;
  role?: UserRole;
  permissions?: Permission[];
  token?: string;
  refreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export function hasPermission(user: User, permission: Permission): boolean {
  return !!user?.permissions?.includes(permission);
}

export function hasRole(user: User, role: UserRole): boolean {
  return user.role === role;
}
