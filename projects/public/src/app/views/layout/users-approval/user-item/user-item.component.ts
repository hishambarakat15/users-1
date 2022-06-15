import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
})
export class UserItemComponent implements OnInit {
userItem!:any;
nationalId!:[];
userId!: string ;
  constructor(private _userService: UsersService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => console.log(params['id']));

    this._userService.getUserById(this.userId).subscribe(res=>{
      console.log(res);
      this.userItem =res.data
      
    })
  }

}
