const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (hasilNonton) => {
  let jumlah = 0;
  return new Promise(async (resolve,rejected) => {
    let x = await  promiseTheaterIXX()
        .then((data) => {
          data.forEach(element => {
            if(element.hasil===hasilNonton){
              jumlah++;
            }
          });
      });
      
    let y = await  promiseTheaterVGC()
        .then((data) => {
          data.forEach(element => {
            if(element.hasil===hasilNonton){
              jumlah++;
            }
          });
      });

    resolve(jumlah)
    
  });
};
module.exports = {
  promiseOutput,
};
