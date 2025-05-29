import { readContacts } from '../utils/readContacts.js';

export const countContacts = () => {
  const contacts = readContacts();
  return contacts.length;
};

console.log(await countContacts());
