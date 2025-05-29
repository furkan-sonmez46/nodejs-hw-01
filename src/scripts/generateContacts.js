import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = (count) => {
  const contacts = readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  writeContacts(contacts);
};
