import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { crimiNal } from './criminal';
let criminals:crimiNal

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private user:UserService){}
  crinaArray:crimiNal[]=[]
  ngOnInit(): void {
   this.getCriminals()
  //  console.log(criminals)
  }
  getCriminals(){
    this.user.getCriminals().subscribe(r=>{
     let  a:any=r
     this.crinaArray=a
     console.log(criminals)

    })
  }

}
