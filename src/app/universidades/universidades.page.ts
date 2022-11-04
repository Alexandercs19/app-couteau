import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  constructor() { }

  public Lista = new Array();
  public Nombre:String;
  public universities: [
    {
      domains: [],
      alpha_two_code: "",
      web_pages: [],
      country: "",
      state_province: null,
      name: "",
    },
  ]
   async Universidad(){
    
    const peticion = await fetch(`http://universities.hipolabs.com/search?country=${this.Nombre}`)
    
    const data = await peticion.json()

    const { country } = data

    console.log(country);

    /*this.edad = age;*/

  }

  ngOnInit() {
  }

}
