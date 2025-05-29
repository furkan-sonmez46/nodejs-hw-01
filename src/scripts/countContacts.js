import { readContacts } from '../utils/readContacts.js';

export const countContacts = () => {
  try {
    const contacts = readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    return 0;
  }
};

console.log(await countContacts());
