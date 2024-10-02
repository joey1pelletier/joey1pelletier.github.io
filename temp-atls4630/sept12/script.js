const rooms = [
    {
        name: '104',
        capacity: 30,
        numWhiteBoards: 3,   
    },
    {
        name: 'BTU',
        capacity: 30,
        numWhiteBoards: 2,
    },
];

function printRoomInfo(room) {
    console.log(`Hello, I am room' "${room.name}"! I can hold ${room.capacity} people and I have ${room.numWhiteBoards} whiteboards`);
}

rooms.forEach(printRoomInfo);

class Room {
    constructor(roomName, roomCapacity, numberOfWhiteboards) {
        this.name = roomName;
        this.capacity = roomCapacity;
        this.numWhiteBoards = numberOfWhiteboards;
    }
    printRoomInfo() {
        console.log(`Hello, I am room' "${this.name}"! I can hold ${this.capacity} people and I have ${this.numWhiteBoards} whiteboards`);
    }
}

const classrooms = [
    new Room('104', 30, 3),
    new Room('BTU', 30, 2),
];

classrooms.forEach(room => room.printRoomInfo());