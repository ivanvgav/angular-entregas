import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  public estudiantes: Array<String> = ["Jorge Perez", "Juan Molina", "María Sanchez", "Pedro Bellucci"]

  ngOnInit(): void {
  }

}
