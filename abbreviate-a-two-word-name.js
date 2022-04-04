//Abbreviate a Two Word Name

function abbrevName(name){
  let nameArr = name.split(" ")
  let firstInitial = (nameArr[0].charAt(0))
  let lastInitial = (nameArr[1].charAt(0))
  return(`${firstInitial}.${lastInitial}`).toUpperCase()
}
