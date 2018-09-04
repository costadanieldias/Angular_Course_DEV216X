import {Component, Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {

  public varIP: string;
  private dataUrl: string = 'http://httpbin.org/ip';

  constructor(private http: Http) {}

  ngOnInit() {
    this.getItems().subscribe(ipdata => this.varIP = ipdata.origin);
  }

  getItems(): Observable<IPData> {
    return this.http.get(this.dataUrl).map(this.extractData);
  }
  
  extractData(res: Response) {
    return res.json();
  }
}

class IPData {
  public origin: string;
}