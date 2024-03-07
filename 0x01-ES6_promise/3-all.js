import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser()
    .then((user) => uploadPhoto().then((photo) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
      return { user, photo };
    }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
