import { Component, OnInit } from '@angular/core';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
usersList: any[] = [];
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.getUsersList().subscribe(res => {
      console.log(res)

      this.usersList = res.data.result ;
           console.log(this.usersList)
    }
      )
    
  }

}
