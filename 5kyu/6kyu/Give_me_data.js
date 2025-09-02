function hasPermission(db, cat) {
  if (db.includes(`${cat}_deny`)) return false
  if (db.includes(`${cat}_allow`)) return true
  if (db.includes('*_deny')) return false
  if (db.includes('*_allow')) return true
  return false
}
//test cases