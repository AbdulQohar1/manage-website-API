const getAllPrice = async ( req, res) => {
  res.send('get all price');
}

const getPrice = async ( req, res) => {
  res.send('get price');
};

const createPrice = async ( req, res) => {
  res.send('create price');
};

const updatePrice = async ( req, res) => {
  res.send('update price');
};

const deletePrice = async (req , res) => {
  res.send('delete price')
};

module.exports = {
  getAllPrice,
  getPrice,
  createPrice,
  updatePrice,
  deletePrice,
};