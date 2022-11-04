import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  constructor() { }

  public edad:number;
  public edadRango: String;
  public Nombre: String;


   async Rango(){

    const peticion = await fetch(`https://api.agify.io/?name=${this.Nombre}`)

    const data = await peticion.json()
    

    const { age } = data

    console.log(data)

    this.edad = age;    
    
  }


  ngOnInit() {
  }

}
