export default function getFullResponseFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      throw new Error('The fake API is not working currently');
    }
  });
}
