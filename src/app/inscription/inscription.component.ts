import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  isSignedIn=false
  constructor(public firebaseService:FirebaseService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')!==null)
      this.isSignedIn=true
      else 
      this.isSignedIn=false
  }
 async onSignup(email:string,password:string)
 {
   await this.firebaseService.signup(email,password)
   if(this.firebaseService.isLoggedIn)
   this.router.navigate(['/home']);
   this.isSignedIn=true
 }

}
