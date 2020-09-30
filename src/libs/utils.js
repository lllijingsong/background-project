/**
 * @method handleLocalStorage
 * @param {String} method 'get' or 'set' or 'remove'
 * @param {String} key 'local Storage' key name
 * @param {*} value
 */
function handleLocalStorage (method, key, value) {
  switch (method) {
    case 'get': {
      let temp = window.localStorage.getItem(key)
      if (temp) {
        return temp
      } else {
        return false
      }
    }
    case 'set': {
      window.localStorage.setItem(key, value)
      break
    }
    case 'remove': {
      window.localStorage.removeItem(key)
      break
    }
    default: {
      return false
    }
  }
}

// handleLocalStorage('set', 'userName', 'Tom')

// handleLocalStorage('get', 'userName')

// handleLocalStorage('remove', 'userName')

export { handleLocalStorage }
