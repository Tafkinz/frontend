import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from "../../services/authentication";
import {Contact, ContactDTO, ContactType, User} from "../login";
import {ContactsService} from "../../services/contactsService";

@Component({
  templateUrl: 'contacts.html',
  styleUrls: ['./contacts.css']
})

export class ContactsComponent implements OnInit {
  model: any = {};
  contact: Contact;
  editedContactType: any = [];
  contacts: Array<Contact>;
  contactTypes: Array<ContactType>;
  contactType: ContactType;
  user: User;
  isAddNewContactVisible: boolean = false;
  isAdmin: boolean = false;
  isShowAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.contactsService.getContactTypes().subscribe(res => {
      this.contactTypes = <Array<ContactType>>res;
      this.contactTypes.forEach(ct => {
        return this.editedContactType[ct.contactTypeId] = ct.contactTypeName
      });
    });
    this.user = <User>JSON.parse(localStorage.getItem("appUser"));
    this.isAdmin = this.user.personType ? this.user.personType.personTypeName === 0 : false;
    this.contactsService.getContactsForUser(this.user.userId).subscribe(res => {
      this.contacts = <Array<Contact>>res;
    });
  }

  editContact(id: number) {
    this.contactsService.getContactById(id).subscribe(res => {
      this.contact = <Contact>res;
    });
  }

  putModifiedContact() {
    const contactEdit: ContactDTO = <ContactDTO>{
      userId: this.user.userId,
      contactTypeId: this.model.contactTypeEditId,
      value: this.model.editValue
    };

    return this.contactsService.update(this.contact.contactId, contactEdit).subscribe(res => {
      const index = this.contacts.findIndex(cont => cont.contactId == this.contact.contactId);
      this.contacts.splice(index, 1);
      this.contacts.push(<Contact>res);
      this.contact = null;
    });
  }

  deleteContact(id: number) {
    this.contactsService.delete(id).subscribe(res => {
      const index = this.contacts.findIndex(c => c.contactId == id);
      this.contacts.splice(index, 1);
    });
  }

  postContact() {
    const contact: ContactDTO = <ContactDTO>{
      contactTypeId: this.model.contactTypeId,
      value: this.model.value,
      userId: this.user.userId
    };

    if (contact != null) {
      this.contactsService.postContact(contact).subscribe(res => {
        this.isAddNewContactVisible = false;
        return this.contacts.push(<Contact>res);
      });
    }
  }

  postContactType() {
    const contactType: ContactType = <ContactType>{
      contactTypeName: this.model.contactTypeValue
    };

    return this.contactsService.postContactType(contactType).subscribe(res => {
      const addedType = <ContactType>res;
      this.contactTypes.push(addedType);
      this.model.contactTypeValue = null;
      this.editedContactType[addedType.contactTypeId] = addedType.contactTypeName;
    });
  }

  editContactType(id: number) {
    const updatedContactType: ContactType = <ContactType>{
      contactTypeName: this.editedContactType[id]
    };

    return this.contactsService.updateContactType(id, updatedContactType).subscribe(res => {
      const index = this.contactTypes.findIndex(p => p.contactTypeId == id);
      this.contactTypes.splice(index, 1);
      this.contactTypes.push(<ContactType>res);
    })
  }

  toggleAddNewContact() {
    this.isAddNewContactVisible = !this.isAddNewContactVisible;
  }

  toggleShowAdmin() {
    this.isShowAdmin = !this.isShowAdmin;
  }
}
