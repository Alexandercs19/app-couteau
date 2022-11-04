import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  TemperaturaClima:any
  TiempoActual = new Date()
  NombreCiudad:any
  IconoClima:any
  DetallesClima:any
  nombre=""
  icon:any

  constructor(public httpClient:HttpClient) { 

    this.loadData()
  }
  

  loadData(){

      this.httpClient.get(`${API_URL}/weather?lat=18.483402&lon=-69.929611&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
      this.TemperaturaClima = results['main']
      this.NombreCiudad = results['name']
      console.log(this.TemperaturaClima);
      this.IconoClima = results['weather'] [0]
      console.log(this.DetallesClima);
      this.IconoClima = `http://openweathermap.org/img/wn/${this.IconoClima.icon}@2x.png` 
    })
  }

  ngOnInit() {
  }

}
