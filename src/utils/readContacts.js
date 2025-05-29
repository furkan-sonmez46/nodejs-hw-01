import fs from 'fs';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = () => {
  try {
    const data = fs.readFileSync(path.resolve(PATH_DB), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};
