import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContactDTO, ContactType} from "../components/login";

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) { }

  getContactById(id: number) {
    return this.http.get('/api/Contacts/' + id);
  }

  getContactsForUser(id: string) {
    return this.http.get('/api/Contacts/user/' + id);
  }

  postContact(contact: ContactDTO) {
    return this.http.post('/api/Contacts', contact);
  }

  delete(id: number) {
    return this.http.delete('/api/Contacts/' + id);
  }

  update(id: number, contact: ContactDTO) {
    return this.http.put('/api/Contacts/' + id, contact);
  }

  postContactType(contactType: ContactType) {
    return this.http.post('/api/ContactTypes', contactType);
  }

  updateContactType(id: number, contactType: ContactType) {
    return this.http.put('/api/ContactTypes/' + id, contactType);
  }

  getContactTypes() {
    return this.http.get('/api/ContactTypes');
  }
}
