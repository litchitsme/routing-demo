import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../shared/users.service';
import { Users } from '../../users'


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: 'user.component.html',
})

export class UserComponent implements OnInit, OnDestroy {
  userId: string = '';
  users: Users[] = [];
  userById: Users | undefined;
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  async ngOnInit() {
    this.usersService.getUsers().then(users => this.users = users);
    
    // Subscribe to parameter changes
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params['id'];
    
    this.usersService.getUserById(parseInt(this.userId)).then(user => this.userById = user);
    });
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
