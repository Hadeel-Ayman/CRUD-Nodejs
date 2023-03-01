const fs = require("fs");

// function add items
const addPerson = (id, fname, lname, country, age, colorFav) => {
    const DataObj = loadData();

    // dont doubleicate the item
    const doubleicate = DataObj.filter((item) => {
        return item.id === id;
    });
    console.log(doubleicate);

    if (doubleicate.length == 0) {
        DataObj.push({
            id: id,
            fname: fname,
            lname: lname,
            country: country,
            age: age,
            colorFav: colorFav,
        });

        save(DataObj);
    } else {
        console.log("Sorry!! the item is doubleicate");
    }
};


// function delete item
const deletePerson = (id) => {
    const DataObj = loadData();
    const DataAfterDeleting = DataObj.filter((item) => {
        return item.id !== id;
    });
    console.log(DataAfterDeleting);
    save(DataAfterDeleting);
};


// function read data of item based on id
const ReadOneItem = (id) => {
    const DataObj = loadData();
    const FindData = DataObj.find((item) => {
        return item.id === id;
    });
    console.log(FindData);
};


// function list of data
const list = () => {
    const DataObj = loadData();
    DataObj.map((item) => {
        console.log(item.fname, item.age, item.country);
    });
};


// function getAllData
const getAllData = () => {
    const DataObj = loadData();
    DataObj.map((item) => {
        console.log(item.fname, item.lname, item.colorFav, item.country, item.age, item.id);
    });
};


// read data from json file and convert it to object to add item
const loadData = () => {
    try {
        const JsonData = fs.readFileSync("PersonJson.json").toString();
        return JSON.parse(JsonData);
    } catch {
        return [];
    }
};


// save data in json file
const save = (DataObj) => {
    const saveJson = JSON.stringify(DataObj);
    fs.writeFileSync("PersonJson.json", saveJson);
};


// exports functions
module.exports = {
    getAllData,
    addPerson,
    deletePerson,
    list,
    ReadOneItem,
};
