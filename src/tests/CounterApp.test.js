import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import '../setupTest.js'

import CounterApp from '../CounterApp'


describe('Pruebas en <CounterApp/>', () => {
  let wrapper = shallow(<CounterApp />); //undefined

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterApp /> correctamente', () => {
    const counter = 10;
    // const wrapper = shallow(<CounterApp value={counter} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor de 100 por defecto', () => {
    const counter = 100;
    const wrapper = shallow(<CounterApp value={counter} />);
    const counterText = wrapper.find('h2').text();
    expect(counterText).toEqual(counter.toString());
  });

  test('debe de incrementar con el boton de +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('11');
  });
  test('debe de decrementar con el boton de -1', () => {

    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('9');
  });
  test('debe colocar el valor por defecto con el btn reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe('105');
  });

});
