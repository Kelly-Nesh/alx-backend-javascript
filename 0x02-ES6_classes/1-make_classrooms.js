import ClassRoom from './0-classroom'

function initializeRooms () {
    return [19, 20, 34].map(n => new ClassRoom(n));
}