const db = require('./../../data/db-config')

const getAll = async () => {
  const rows = await db('accounts')
  .select('id', 'name', 'budget')
  return rows
}

const getById = async id => {
  const [ account ] = await db('accounts')
  .select('id', 'name', 'budget')
  .where('id', id)

  return account
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
