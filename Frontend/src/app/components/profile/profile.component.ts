import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSub: Subscription;
  

  constructor(private authService: AuthService
           ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe((user: User) => {
      this.user = user;
    
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}