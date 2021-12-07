const router = require("express").Router();
const Account = require("./accounts-model");
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')

router.get("/", async (req, res, next) => {
  try {
    // throw new Error('bad')
    const accounts = await Account.getAll();
    res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  res.status(200).json(req.accountFromDb);
});

router.post("/", checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try {
    const newAcc = await Account.create(req.body)
    res.status(201).json(newAcc)
  } catch(err){
    next(err)
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

// router.use((err, req, res, next) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
