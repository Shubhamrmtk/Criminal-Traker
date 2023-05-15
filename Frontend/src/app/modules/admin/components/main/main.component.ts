import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  userName:any
  constructor(private user:UserService){}
  ngOnInit() {
    this.getUserData()
  
    // Initialization tasks go here
  }
  sideBarOpen=true
  sidebareToggler(){
    console.log('this is from side bar')
    this.sideBarOpen=!this.sideBarOpen
    console.log(this.sideBarOpen)
  }
  getUserData(){
    this.user.getUserDetails().subscribe(res=>{
      console.log(res)
      const asd:any=res
      this.userName=asd.firstName
    })
  }

}
