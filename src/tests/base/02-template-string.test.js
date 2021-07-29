import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';


describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar hola Fredo', () => {
    const nombre = 'Fredo';

    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  });

  // getSAludo debe retornar hola Carlos si no hay argumento nombre
  test('getSaludo debe retornar Hola Carlos si no hay argumento en el nombre', () => {

    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  });
});
