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
userId!: string;
natiolalIdFront:any ;
natiolalIdBack:any;
  constructor(private _userService: UsersService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.userId = params['id']);

    this._userService.getUserById(this.userId).subscribe(res=>{
      console.log(res);
      this.userItem =res.data
this.natiolalIdFront = res.data.userDocuments.find((x: any)=> x.id == 1).content
this.natiolalIdBack = res.data.userDocuments.find((x: any)=> x.id == 2).content
      console.log(this.natiolalIdBack)
    })
  }

}
