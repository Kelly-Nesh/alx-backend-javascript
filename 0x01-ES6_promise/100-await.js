import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = { photo: null, user: null };

  try {
    await createUser().then((user) => { res.user = user; });
    await uploadPhoto().then((photo) => { res.photo = photo; });
  } catch (error) { res.photo = null; res.user = null; return res; }
  return res;
}
