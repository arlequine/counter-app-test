import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import '../setupTest.js'

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje "Hola soy goku"', () => {
  //   const saludo = 'Hola soy goku';

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola soy goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitlo enviado por props', () => {
    const saludo = 'Hola soy goku';
    const subtitulo = 'Este es el subtitulo';
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subtitulo}
      />);

    const textoParrafo = wrapper.find('p').text();
    // document.querySelector('p').textContent; es igual a la linea 33
    expect(textoParrafo).toBe(subtitulo);
  });


});
