import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  public userList: any = [
  { id: 1, name: "Nikita" },
  { id: 2, name: "Mohit" },
  { id: 3, name: "Vanshika" },
  { id: 4, name: "Jayant" },
  ]
  
  constructor() {
  }

  ngOnInit(): void {
    // console.log("printing username",this.name)
  }

}
