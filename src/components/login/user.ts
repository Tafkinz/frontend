export class User {
  id?: number;
  username?: string;
  password?: string;
  firstName: string;
  lastName: string;
  userId?: string;
  personType?: PersonType;
  contacts?: Contact[];
}

export interface PersonType {
  personTypeId: number,
  personTypeName: number
}

export interface Contact {
  contactId: number
  value: string,
  contactTypeId: number,
  userId: string,
  contactType: string
}

export interface ContactDTO {
  value: string,
  userId: string,
  contactTypeId: number
}

export interface ContactType {
  contactTypeName: string,
  contactTypeId: number
}
