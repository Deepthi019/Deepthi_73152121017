import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';
  name:string;
    age:number;
    email: string;
    imagePath:string;
    
    constructor(){
      this.name="deepthi";
      this.age=20;
      this.email="deepthi2004@gmail.com";
      this.imagePath="./assets/logo.png";
    }

    changeName(){
      this.name="Deeps";
    }

    changeAge(){
      this.age=21;
    }

    changeEmail(){
      this.email="d2004@gmail.com"
    }
    changeImage(){
      this.imagePath="./assets/logo2.png"
    }
}
