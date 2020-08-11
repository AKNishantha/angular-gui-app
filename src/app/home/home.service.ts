import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  SERVER_URL = 'https://azure-redis-cache-app.azurewebsites.net/file/upload';

  constructor(private httpClient: HttpClient) {
  }

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {});

  }
}
