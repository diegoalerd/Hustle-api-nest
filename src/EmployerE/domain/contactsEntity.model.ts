

export class contacts{

    id_contact: number
    fullName: string;
    jobTitle: string;
    phoneNumber: string;
    email: string;

  constructor(
    id_contact: number, 
    fullName: string, 
    jobTitle: string, 
    phoneNumber: string, 
    email: string
) {
    this.id_contact = id_contact
    this.fullName = fullName
    this.jobTitle = jobTitle
    this.phoneNumber = phoneNumber
    this.email = email
  }

}