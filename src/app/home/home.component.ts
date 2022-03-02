import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout=new EventEmitter<void>()
  constructor(public firebaseServie:FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
   this.firebaseServie.logout()
   this.isLogout.emit()
  }

}
