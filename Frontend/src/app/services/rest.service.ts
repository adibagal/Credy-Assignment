import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = 'https://api.themoviedb.org/3/search/movie?api_key=cdaa68790f7a7ae489aec9ad67eab53c&query=';
  data :string = 'avengers'
query :any




  changedata(data) {  
  this.data = JSON.stringify(data.mname);  
  // this.data = "Avengers"  

  }

  GetData() {
  //   console.log('url' + this.url + this.data);
    return this.http.get(this.url + this.data)

  }
}