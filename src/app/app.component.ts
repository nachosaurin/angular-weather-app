import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  weather:any;



 constructor(public weatherService: WeatherService){

 }
 
  ngOnInit() {   
  }

  getWeather(cityName:String, cCode:String){
    this.weatherService.getWeather(cityName, cCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

  submitLocation(cityName: HTMLInputElement, cCode: HTMLInputElement){
    this.getWeather(cityName.value, cCode.value);
    cityName.value = '';
    cCode.value = '';
    cityName.focus();
    return false;

  }

  convertToCelsius(temp: number) {
    return ((this.weather.temp - 32) / 1.8).toFixed(2);
  }

}
