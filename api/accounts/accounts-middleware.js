const Account = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  if (!req.body.name || req.body.budget === undefined) {
    next({ status: 400, message: "name and budget are required" });
  } else if (typeof req.body.name !== "string") {
    next({ status: 400, message: "name of account must be a string" });
  } else if (typeof req.body.budget !== "number") {
    next({ status: 400, message: "budget of account must be a number" });
  } else if (!req.body.name.trim()) {
    next({ status: 400, message: "name and budget are required" });
  } else if (3 > req.body.name.trim().length  || req.body.name.trim().length > 100) {
    next({ status: 400, message: "name of account must be between 3 and 100" });
  } else if(req.body.budget < 0 || req.body.budget >1000000){
    next({ status: 400, message: "budget of account is too large or too small"  });
  }
  else {
    req.body.name = req.body.name.trim()
    next();
  }
};

exports.checkAccountNameUnique = (req, res, next) => {};

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    !account
      ? res.status(404).json({ message: "account not found" })
      : (req.accountFromDb = account);
    next();
  } catch (err) {
    next(err);
  }
};
