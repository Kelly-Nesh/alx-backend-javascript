import ClassRoom from './0-classroom';

// eslint-disable-next-line no-unused-vars
function initializeRooms() {
  return [19, 20, 34].map((n) => new ClassRoom(n));
}
