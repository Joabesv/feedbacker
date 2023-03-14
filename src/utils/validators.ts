export function validateEmptyAndLength(value: string): boolean | string {
  if (!value) {
    return '*Esse campo é obrigatório!';
  }

  if (value.length < 3) {
    return `Este campo precisa ter no mínimo 3 caracteres!`;
  }

  return true;
}

export function validateEmptyAndEmail(value: string): boolean | string {
  if (!value) {
    return '*Esse campo é obrigatório!';
  }
  const isEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
  if (!isEmailValid) {
    ('*Por favor, insira um e-mail válido');
  }
  return true;
}
