const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    !account ? res.status(404).json({ message: "account not found" }) :
    req.accountFromDb = account
    next()
  } catch (err) {
    next(err);
  }
}
