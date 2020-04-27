import { storage } from "../index";
import { PRODUCTS } from "../collections/firestore";
import { generateFileName } from "../utils/storage";
export const uploadToStorage = file => {
  const fileRef = storage.ref(`${PRODUCTS}/${generateFileName(file)}`);
  return fileRef.put(file).then(res => res.ref.getDownloadURL());
};