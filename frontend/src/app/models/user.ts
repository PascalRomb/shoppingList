
export class User {
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  id:number;
  username: string;
  email: string;
  password: string;
}
