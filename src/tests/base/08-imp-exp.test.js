import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp'
import heroes from '../../data/heroes';
describe('Pruebas en funciones de Heroes', () => {
  test('debe de retornar un heroe por Id', () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find(heroe => heroe.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test('debe de retornar undefined si heroe no existe', () => {
    const id = 20;

    const heroe = getHeroeById(id);

    // const heroeData = heroes.find(heroe => heroe.id === id);

    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un array de heroes por owner', () => {
    const owner = 'DC';

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter(heroe => heroe.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test('debe de retornar un array de heroes de Marvel', () => {
    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });

});
