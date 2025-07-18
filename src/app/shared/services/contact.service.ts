import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactSuccess } from '../interfaces/contact-success';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private httpClient:HttpClient) { }

  sendContactInfo(userData:object):Observable<ContactSuccess>{
  return this.httpClient.post<ContactSuccess>(`https://upskilling-egypt.com:3001/contact` , userData)
  }
}
