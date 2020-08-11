const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        client.on('command', (command) => {
            console.log(`Command: ${command}`);
            //commands to be implemented: add, list, delete
            /*
                Add command adds a task into the task array
                List command returns the tasks in the array
                Delete command removes the tasks from the array.
            */ 
        });
    }
}

module.exports = (client) => new Server(client);