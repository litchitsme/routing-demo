import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  url = "http://localhost:3000"
  users: Users[] = []

  async fetchUsers() {
    try {
      const response = await fetch(`${this.url}/users`);
      const data = await response.json();
      this.users = data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUsers() {
    await this.fetchUsers();
    return this.users;
  };

  async getUserById(id: number) {
    await this.fetchUsers();
    return this.users.find(user => user.id === id);
  };
}
