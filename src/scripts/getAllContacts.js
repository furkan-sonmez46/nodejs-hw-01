import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = () => {
  return readContacts();
};

console.log(await getAllContacts());
