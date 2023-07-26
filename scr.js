const formulario = document.querySelector('.formulario2'),
      inputs = document.querySelectorAll('.formulario2 input'),
      sign_in_container = document.querySelector('.sign-in-container'),
      sign_up_container = document.querySelector('.sing-up-container');

document.addEventListener('click', e =>{
  if(e.target.matches('.no-account')){
    sign_in_container.style.display = 'block';
    sign_up_container.style.display = "none";
    document.querySelector('.check_notify').classList.remove('active');
  }
  else if(e.target.matches('.ok-account')){
    sign_up_container.style.display = 'block';
    sign_in_container.style.display = 'none';
    document.querySelector('.error_notify').classList.remove('active');
  }
})

const expresiones = {
  nombre: /^[a-zA-ZÁ\s]{1,40}$/,
  celular: /^[1-9]\d{8}$/,
  Fecha: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  contraseña: /^.{4,12}$/
}

const campos = {
  nombre:false,
  celular:false,
  Fecha:false,
  email:false,
  contraseña:false
}

const validarFormulario = (e) =>{
  switch (e.target.name) {
    case "nombre":
      validar(expresiones.nombre, e.target.value, 'name');
      break;
    case "celular":
      validar(expresiones.celular, e.target.value, 'celular');
      break;
    case "Fecha":
      validar(expresiones.Fecha, e.target.value, 'fecha');
      break;
    case "email":
      validar(expresiones.email, e.target.value, 'email');
      break;
    case "password":
      validar(expresiones.contraseña, e.target.value, 'password');
      break;
  
    default:
      break;
  }
}

const validar = (expresion, input, campo) => {
  if (expresion.test(input)) {
    document.getElementById(campo).classList.remove('error')
    campos[campo]=true;
  }
  else{
    document.getElementById(campo).classList.add('error')
    campos[campo]=false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', e => {
  e.preventDefault();
  if (campos.nombre && campos.celular && campos.Fecha && campos.email && campos.contraseña) {
    document.querySelector('.check_notify').classList.add('active');
    document.querySelector('.error_notify').classList.remove('active');

    setTimeout(() => {
      document.querySelector('.check_notify').classList.remove('active');
    }, 3000);
  }
  else{
    document.querySelector('.error_notify').classList.add('active');
    document.querySelector('.check_notify').classList.remove('active');
  }
})