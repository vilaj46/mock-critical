import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SlideShow from '../components/SlideShow';
import ImageClicker, { Square } from '../components/ImageClicker';
import HookWrapper from '../components/HookWrapper';

import useCount from '../hooks/useCount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageClicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with the correct number of squares', () => {
  const wrapper = shallow(<ImageClicker length={3} count={0} />);
  expect(wrapper.find(Square).length).toEqual(3);
});

it('changes image on square click', () => {
  const wrapper = shallow(
    <HookWrapper
      component={() => <SlideShow slideShowImages={[]} />}
      hook={useCount}
    />
  );

  const { hook } = wrapper.props();
  let [count, setCount] = hook;

  const square1 = shallow(
    <Square count={count} number={1} setCount={setCount} />
  );

  square1.simulate('click');
  [count, setCount] = wrapper.props().hook;
  expect(count).toEqual(1);

  const square2 = shallow(
    <Square count={count} number={2} setCount={setCount} />
  );

  square2.simulate('click');
  [count, setCount] = wrapper.props().hook;
  expect(count).toEqual(2);
});
