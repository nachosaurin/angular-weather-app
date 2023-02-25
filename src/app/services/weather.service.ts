import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'e5ec999deec05dfafd8624045009cbda'
  URI: String = '';
  constructor(private http: HttpClient) { 
    this.URI =`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
    
  }

  getWeather (cityName: String, cCode:String) {
   return this.http.get(`${this.URI}${cityName},${cCode}`)
  }
}
