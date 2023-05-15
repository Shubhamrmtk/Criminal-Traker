import { Component ,Output, EventEmitter ,Input,OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from './user';
let User:User

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  myNmae:any
  @Output() toggleSidebarForme:EventEmitter<any>=new EventEmitter()
   userName:string=""
  ngOnInit() {
    this.getUser()
    console.log(User)
    this.userName=User.firstName
}

  constructor(private auth:AuthService,private user:UserService){}


  toggleSidebar(){
    this.toggleSidebarForme.emit();

  }
  logOut(){
    this.auth.logout()

  }
  getUser(){
    this.user.getUserDetails().subscribe(res=>{
      let a:any=res
      User=a
      // console.log(a .id)

    })
  }
}
