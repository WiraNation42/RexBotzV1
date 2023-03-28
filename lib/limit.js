const fs = require('fs')

exports.isLismit = function(sender, isPremium, isOwner, limitCount, _db) {
    if (isOwner) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitCount) {
                found = true
                return true
            } else {
                found = false
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: sender, limit: 0 }
        _db.push(obj)
        fs.writeFileSync('../database/limit.json', JSON.stringify(_db, null, 2))
        return false
    }
}

exports.limitAdd = function(sender, _db) {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].limit += 1
        fs.writeFileSync('../database/limit.json', JSON.stringify(_db, null, 2))
    }
}

exports.getLimit = function(sender, limitCount, _db) {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender)
            found = i
    })
    if (found !== false) {
        return limitCount - _db[found].limit
    } else {
        return limitCount
    }
}