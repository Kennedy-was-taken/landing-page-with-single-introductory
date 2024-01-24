import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedirecter',
  templateUrl: './homedirecter.component.html',
  styleUrl: './homedirecter.component.css'
})
export class HomedirecterComponent implements OnInit{

  constructor(private router : Router){ }

  ngOnInit(): void {
    this.router.navigate(['/landingpage']);
  }

}
