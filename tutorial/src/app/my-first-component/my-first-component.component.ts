import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {

  age:number;
  names:Array<string>;

  constructor() {
    this.age = 18;
    this.names = ['Jose', 'Rosa', 'Robin', 'Wilson', 'Luisa'];
  }

  ngOnInit(): void {
    console.log('my-first-component has loaded succesfully');
  }

  increaseAge(){
    this.age += 1;
  }

  decreaseAge(){
    this.age -= 1;
  }

}
