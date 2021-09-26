import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qiI6HlI42D02Jj5dsPCGLZwevNQ9fcI3CQ&usqp=CAU"
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  // logout(){
  //   this._router.navigate(["/login"])
  //   }

}
