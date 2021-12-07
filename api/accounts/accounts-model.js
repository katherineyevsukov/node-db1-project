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

const create = async account => {
  const [ newId ] = await db('accounts').insert(account)
  
  return getById(newId)
}

const updateById = async (id, account) => {
  const updated = await db('accounts').update(account).where('id', id)

  const newAcc = await getById(updated)
  return newAcc
}

const deleteById = async id => {
  await db('accounts').delete().where('id', id)

  const deleted = await getById(id)
  return deleted
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
