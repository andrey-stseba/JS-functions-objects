// Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?

const num = Number(
  prompt("Делится ли число на 5, или на 3, или на 2 без остатка?")
);
const value1 = "ДА, )))";
const value2 = "Нет, (((";

if (num % 5 === 0 || num % 3 === 0 || num % 2 === 0) {
  alert(value1);
} else {
  alert(value2);
}

// Таски на циклы (Only FOR)

// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)

const naturalNumber = Number(prompt("Вычислить факториал запрошенного числа."));
let result = 1;
for (let i = 1; i <= naturalNumber; i++) {
  result *= i;
}
alert("Факториал запрошенного числа:  " + result);

// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).

const lim1 = Number(
  prompt("Для нахождения произведение целых чисел, введите нижний предел")
);
const lim2 = Number(prompt("Введите верхний предел"));
let result1 = lim1;

if (lim2 > lim1) {
  for (let i = lim1 + 1; i <= lim2; i++) {
    result1 = result1 * i;
  }
  alert(
    "Произведение целых чисел в пределах от " +
      lim1 +
      " до " +
      lim2 +
      " = " +
      result1
  );
} else {
  for (let i = lim1 - 1; i >= lim2; i--) {
    result1 = result1 * i;
  }
  alert(
    "Произведение целых чисел в пределах от " +
      lim1 +
      " до " +
      lim2 +
      " = " +
      result1
  );
}

/**************************************Таски на функции****************************************/

// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.

// Ожидаемый вывод:
// isAdult(20); // true
// isAdult(4); // false

const age = Number(
  prompt(
    "Проверять возраст пользователя на совершеннолетие, введите свой возраст пожайлуста"
  )
);
if (isAdult(age)) {
  alert("Вам уже всё можно");
} else {
  alert("К сожелению вам ещё не 18(");
}
/**
 *
 * @param {Number} age - возраст пользователя
 * @returns {boolean} Проверяет исполнилось ли  пользователя 18 лет
 */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

/**
 *
 * @param {Number} num1 - первое число
 * @param {Number} num2 - второе число
 * @returns {boolean} проверяет делится ли первое на второе без остатка
 */
const checkMultiplicity = function (num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("делится ли 25 на 5 >>", checkMultiplicity(25, 5));
console.log("делится ли 15 на 3 >>", checkMultiplicity(15, 3));
console.log("делится ли 15 на 5 >>", checkMultiplicity(15, 5));
console.log("делится ли 15 на 4 >>", checkMultiplicity(15, 4));

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

const triangle = isTrianglePossible(2, 3, 1);
if (triangle) {
  console.log("Треугольник возможен");
} else {
  console.log("Треугольник не возможен");
}

/**
 *
 * @param {Number} a - первая сторонна треугольника
 * @param {Number} b - вторая сторонна треугольника
 * @param {Number} c - третья сторонна треугольника
 * @returns {boolean} Проверка возможности треугольника.
 */
function isTrianglePossible(a, b, c) {
  if ((a > 0) & (b > 0) & (c > 0)) {
    return true;
  } else {
    return false;
  }
}

// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)

// Площадь треугольника по формуле Герона
/**
 *
 * @param {Number} a - первая сторонна треугольника
 * @param {Number} b - вторая сторонна треугольника
 * @param {Number} c - третья сторонна треугольника
 * @returns {Number} полощадь треугольника по формуле Герона
 */
const areaTriangle = function (a, b, c) {
  const p = semiPerimeter();
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  function semiPerimeter() {
    return (a + b + c) / 2;
  }
};
console.log("Площадь треугольника = ", areaTriangle(5.5, 5, 3));

//  Площадь поверхности прямоугольного параллелепипеда S = 2(ab+ bc+ ac)

const surfaceAreaParallelepiped = calcSurfaceAreaParallelepiped(1, 2, 3);
console.log(
  "Площадь поверхности прямоугольного параллелепипеда = ",
  surfaceAreaParallelepiped
);

/**
 *
 * @param {Number} x - первая грань параллелепипеда
 * @param {Number} y - вторая грань параллелепипеда
 * @param {Number} z - третья грань параллелепипеда
 * @returns {Number} Площадь поверхности прямоугольного параллелепипеда S = 2(ab+ bc+ ac)
 */
function calcSurfaceAreaParallelepiped(x, y, z) {
  const s = 2 * (x * y + y * z + x * z);
  return s;
}

// (2 функции на выбор реализовать в формате функционального выражения)

/* ******************************Таски на объекты************************************* */

// 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.

const student = {
  name: "Alina",
  surname: "Sidorenko",
  isMale: false,
  phoneNumber: 380633003222,
  city: "Kiev",
  street: "Grushevsky",
  house: 22,
  apartmentNumber: 120,
  outputAddress() {
    return (
      "city: " + this.city + ", " + "street: " + this.street + ", " + this.house
    );
  },
  changeGender() {
    return (this.isMale = true);
  },
};
console.log(student);
console.log(student.outputAddress());
console.log("isMale:", student.changeGender());

// 2. создать объект, который содержит свойства, о факультете и кафедре, методы: выплата стипендии студенту. (можно на свой выбор)

const faculty = {
  nameFaculty: "ETF",
  namedepartment: ["Electric drive", "Power supply", "Electric cars"],
  deanFaculty: ["Profesor", "Petrov", "Ivan"],
  numberOfGroups: 5,
  numberOfStudents: 100,
  numberOfTeachers: 10,
  averageScoreStudent: 3,
  paymentScholarshipStudent: true,
  paymentScholarship() {
    if (this.averageScoreStudent >= 4) {
      return (this.paymentScholarshipStudent = true);
    } else {
      return (this.paymentScholarshipStudent = false);
    }
  },
};
console.log(faculty);
console.log("Выплата стипендии студенту:", faculty.paymentScholarship());

/*************3 Создать функции-конструкторы:*****************************/

// - Книга (автор, название, год издания, издательство)

function Book(author, bookName, yearPublication, publisher) {
  this.author = author;
  this.name = bookName;
  this.yearPublication = yearPublication;
  this.publisher = publisher;
}
const book1 = new Book("Стефани Оукс", "Священная ложь", 2014, "ЛитВек");
const book2 = new Book(
  "Мелани Бенджамин",
  "Охота на отражение",
  2015,
  "ЛитВек"
);
console.log(book1);

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function ElectronicBook(
  author,
  bookName,
  yearPublication,
  publisher,
  formatBook,
  electronicNumber
) {
  this.author = author;
  this.name = bookName;
  this.yearPublication = yearPublication;
  this.publisher = publisher;
  this.fomat = formatBook;
  this.bookNumber = electronicNumber;
}
const elecBook1 = new ElectronicBook(
  "Стефани Оукс",
  "Священная ложь",
  2014,
  "ЛитВек",
  "pdf",
  "3456"
);
const elecBook2 = new ElectronicBook(
  "Мелани Бенджамин",
  "Охота на отражение",
  2015,
  "ЛитВек",
  "fb2",
  "3457"
);
console.log(elecBook1);
