import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseApp } from '@angular/fire/app';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDt84xzJdaT72YKHGKq3T3XoDvlIz6j7V8",
        authDomain: "prfa-10a6d.firebaseapp.com",
        projectId: "prfa-10a6d",
        storageBucket: "prfa-10a6d.appspot.com",
        messagingSenderId: "737326560702",
        appId: "1:737326560702:web:5eb2538376c5111818b5ef"
      }
    )
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
