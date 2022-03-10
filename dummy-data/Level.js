// to populate db manually

let levelData = [
    {
        Level_number:1,
        level_count:4
    },
    {
        Level_number:2,
        level_count:8
    },
    {
        Level_number:3,
        level_count:9
    },
] 

let index = {Level_number:1}

db.levels.insertMany(levelData);
db.levels.createIndex(index);