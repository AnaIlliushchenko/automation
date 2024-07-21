export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.password = process.env[`USER_${name.replace(/\s+/g, '').toUpperCase()}_PASSWORD`] ?? '';
  }
}

export const users = {
  testUser: new User('Test User', 'test@gmail.com'),
  adminUser: new User('Admin', 'admin@gmail.com')
};