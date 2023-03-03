// imports files
const yargs = require("yargs");
const crud = require("./Crud");

// Constants
const COMMANDS = {
    ADD: "add",
    DELETE: "delete",
    GET: "get",
    READ: 'read',
    LIST: 'list'
};
const DESCRIPTION = {
    DESCRIPTION_ADD: "add an item",
    DESCRIPTION_DELETE: "delete an item",
    DESCRIPTION_GET: "get all data",
    DESCRIPTION_READ: "read one item",
    DESCRIPTION_LIST: "list an data of item",
};


// add function
yargs.command({
    command: COMMANDS.ADD,
    describe: DESCRIPTION.DESCRIPTION_ADD,
    builder: {
        fname: {
            describe: "add the name",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "add the last name",
            demandOption: true,
            type: "string",
        },
        arrOfDegree: {
            describe: "add the arr name",
            demandOption: true,
            type: 'array',
        }
    },
    handler: (x) => {
        crud.addPerson(x.id, x.fname, x.lname, x.country, x.age, x.colorFav, x.arrOfDegree);
    },
});


// delete function
yargs.command({
    command: COMMANDS.DELETE,
    describe: DESCRIPTION.DESCRIPTION_DELETE,
    handler: (x) => {
        crud.deletePerson(x.id);
    },
});


// gatAllData function
yargs.command({
    command: COMMANDS.GET,
    describe: DESCRIPTION.DESCRIPTION_GET,
    handler: () => {
        crud.getAllData();
    },
});


// Read data to one item
yargs.command({
    command: COMMANDS.READ,
    describe: DESCRIPTION.DESCRIPTION_READ,
    builder: {
        id: {
            describe: 'desc of id data',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        crud.ReadOneItem(x.id);
    },
});

// list some of data
yargs.command({
    command: COMMANDS.LIST,
    describe: DESCRIPTION.DESCRIPTION_LIST,
    handler: () => {
        crud.list();
    },
});

yargs.parse();