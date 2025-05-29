import fs from 'fs';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = (data) => {
  fs.writeFileSync(
    path.resolve(PATH_DB),
    JSON.stringify(data, null, 2),
    'utf-8',
  );
};
