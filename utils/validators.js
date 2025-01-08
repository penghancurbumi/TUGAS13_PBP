const { BadRequestError } = require("./errors");

const validateInsert = (nama, merek, spek, harga) => {
  if (!(nama && merek && spek && harga)) {
    throw new BadRequestError(
      "Nama, merek, spek, dan harga harus diisi!"
    );
  }
};
const validateUpdate = (nama, merek, spek, harga) => {
  if (!(nama && merek && spek && harga)) {
    throw new BadRequestError(
      "Nama, merek, spek, dan harga harus diisi!"
    );
  }
};

module.exports = { validateInsert, validateUpdate };