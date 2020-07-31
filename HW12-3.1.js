//12.3 1

const protoObj = {
    country: "USA",
  }
  
  const mainObj = Object.create(protoObj);
  
  mainObj.town = "NewYork";
  mainObj.street = "WallStreet"
  
  function f(object) {
    for (let key in mainObj) {
      if (mainObj.hasOwnProperty(key)){
          console.log("Ключ = " + key + ", значение = " + object[key]);
      }
    }
  }
  
  f(mainObj);