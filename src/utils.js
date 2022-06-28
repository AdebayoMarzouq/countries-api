const save = (item, data) => {
  let check = localStorage.getItem(item)
  if (check) {
    return JSON.parse(check)
  }
  return localStorage.setItem(item, data)
}
