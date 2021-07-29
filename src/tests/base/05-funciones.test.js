import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Pruebas de 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    console.log(user)
    expect(user).toEqual(userTest);
  });
  test('getUserActivo debe regresar un objeto', () => {

    const name = 'fredo'
    const userTest = {
      uid: 'ABC567',
      username: 'fredo'
    }

    const user = getUsuarioActivo(name);
    console.log(user)

    // expect(user).toEqual(userTest);

    expect(user).toEqual({
      uid: 'ABC567',
      username: name
    });

  });



});
