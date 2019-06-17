import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SlideShow, { RightArrow, LeftArrow } from '../components/SlideShow';
import ImageClicker from '../components/ImageClicker';
import HookWrapper from '../components/HookWrapper';

import useCount from '../hooks/useCount';

const slideShowImages = [
  'https://images.unsplash.com/photo-1560410779-a931d1981ba8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
  'https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
  'https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlideShow slideShowImages={slideShowImages} />, div);
});

it('renders with a count of 0', () => {
  const wrapper = shallow(
    <HookWrapper
      component={() => <SlideShow slideShowImages={slideShowImages} />}
      hook={() => useCount()}
    />
  );
  const { hook } = wrapper.props();
  const [count] = hook;
  expect(count).toEqual(0);
});

it('sets count after setCount is called', async () => {
  const wrapper = shallow(
    <HookWrapper
      component={() => <SlideShow slideShowImages={slideShowImages} />}
      hook={() => useCount()}
    />
  );
  const { hook } = wrapper.props();
  let [count, setCount] = hook;
  setCount(count + 1);
  [count, setCount] = wrapper.props().hook;
  expect(count).toEqual(1);
});

it('renders a right arrow and left arrow', () => {
  const wrapper = shallow(<SlideShow slideShowImages={slideShowImages} />);
  expect(wrapper.find('#slide-show-content').children().length).toEqual(2);
});

it('increments count when right arrow clicked', () => {
  const wrapper = shallow(
    <HookWrapper
      component={() => <SlideShow slideShowImages={slideShowImages} />}
      hook={() => useCount()}
    />
  );
  const { hook } = wrapper.props();
  let [count, setCount] = hook;
  expect(count).toEqual(0);
  const buttonWrapper = shallow(
    <RightArrow count={0} length={3} setCount={setCount} />
  );

  buttonWrapper.simulate('click');
  [count, setCount] = wrapper.props().hook;

  expect(count).toEqual(1);

  buttonWrapper.unmount();
  wrapper.unmount();
});

it('decrements count when left arrow clicked', () => {
  const wrapper = shallow(
    <HookWrapper
      component={() => <SlideShow slideShowImages={slideShowImages} />}
      hook={() => useCount()}
    />
  );
  const { hook } = wrapper.props();
  let [count, setCount] = hook;
  expect(count).toEqual(0);
  const buttonWrapper = shallow(
    <LeftArrow count={0} length={3} setCount={setCount} />
  );

  buttonWrapper.simulate('click');
  [count, setCount] = wrapper.props().hook;

  expect(count).toEqual(2);

  buttonWrapper.unmount();
  wrapper.unmount();
});

it('renders a ImageClicker Component', () => {
  const wrapper = shallow(<SlideShow slideShowImages={slideShowImages} />);
  expect(wrapper.find(ImageClicker).length).toEqual(1);
  wrapper.unmount();
});
