import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  constructor() {
   
  }

  public Nombre:String;
  public Genre: String;
  public Arr = new Array();

   async genero(){

    const peticion = await fetch(`https://api.genderize.io/?name=${this.Nombre}`)

    const data = await peticion.json()


    const { gender } = data

    this.Genre = gender;    

  }

  ngOnInit() {
  }

}
