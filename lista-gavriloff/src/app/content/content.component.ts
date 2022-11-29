import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  estudiantes: Array<String> = ["Jorge Perez", "Juan Molina", "María Sanchez", "Pedro Bellucci"]

 birthday = new Date(1993, 6, 4) 

  ngOnInit(): void {
  }

}
