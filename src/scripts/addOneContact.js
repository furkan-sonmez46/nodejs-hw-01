import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = () => {
  try {
    const contacts = readContacts();
    contacts.push(createFakeContact());
    writeContacts(contacts);
  } catch (error) {
    console.error('Error adding one contact:', error.message);
  }
};

addOneContact();
