alert("Bem-vindo, a seguir pediremos que informe alguns dados");

let name = prompt(" Qual seu nome? ");
let age = prompt(" Sua idade ");

let confirmarIdade = confirm(" A sua idade é " + age + " anos? ");

alert(
  "\nSeu nome é: " +
    name +
    "\nSua idade é: " +
    age +
    "\nIdade Confirmada: " +
    confirmarIdade
);
