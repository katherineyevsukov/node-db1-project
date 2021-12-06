const router = require('express').Router()
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try{
    // throw new Error('bad')
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  } catch(err){
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

// router.use((err, req, res, next) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
