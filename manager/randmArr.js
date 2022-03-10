const Level = require("../Models/Level");

const randmArr = async (levelId) => {
  try {
    let success = false;
    //getting data 
    let obj = await Level.findOne({ Level_number: levelId });

    if (obj != null) {

      let arr = [];
      // creatin array with all numbers till levelcount
      for (let i = 0; i <= obj.Level_count; i++) {
        arr.push(i);
      }

      let result = [];
      // creating random numbers / non repeting
      for (let i = 0; i < obj.Level_count; i++) {
        const random = Math.floor(Math.random() * (obj.Level_count - i));
        result.push(arr[random]);
        arr[random] = arr[obj.Level_count - i];

        // making them non continous
        if (i >= 1 && result[i] - result[i - 1] == 1) {
          var a = result[i];
          result[i] = result[i - 1];
          result[i - 1] = a;
        }
      }
      
      success = true;
      return { success: success, levArray: result };
    }

    return { success: success, levArray: [] };

  } catch (error) {
    console.error(error.msg);
  }
};

module.exports = randmArr;
