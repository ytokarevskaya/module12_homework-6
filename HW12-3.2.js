//12.3 2

let obj = {
  testKey1: "testValue1",
  testKey2: "testValue2",
  testKey3: "testValue3"
}

let str = "testKey"

function f(object, string) {
  let x = 0;
  for (let key in object) {
    if (key === string) {
      x = 1;
    } 
  }
    if (x === 0) {
    console.log (false)
  } else console.log (true)
}

f(obj, str)

// Функция решает задачу, но есть более простой вариант решения: использовать специальное ключевое слово in, которое определяет наличие свойства в объекте. Ниже пример более короткого решения:

function checkPropInObj(str, obj) {
  return (str in obj);
}