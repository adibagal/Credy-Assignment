import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private http: RestService) { }
  data: any = []
  results :any=[]
  ngOnInit(): void {

   
    this.http.GetData().subscribe(
      query => {
        this.data = query
        // console.log(this.data.results);
        this.submit();
      });
      
    }

    submit(){
      this.results = this.data.results
        console.log(this.results);
    }
  }