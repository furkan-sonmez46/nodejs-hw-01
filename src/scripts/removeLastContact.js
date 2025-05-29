import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = () => {
  const contacts = readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    writeContacts(contacts);
  }
};

removeLastContact();
