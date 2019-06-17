import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../components/App';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow';
import NewIn from '../components/NewIn';
import BlogNews from '../components/BlogNews';
import Footer from '../components/Footer';
import HookWrapper from '../components/HookWrapper';

import useLoaded from '../hooks/useLoaded';
import useImages from '../hooks/useImages';

import request from '../__mocks__/request';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toEqual(true);
  wrapper.unmount();
});

it('renders a SlideShow Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<SlideShow slideShowImages={[]} />)).toEqual(true);
  wrapper.unmount();
});

it('renders a NewIn Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<NewIn />)).toEqual(true);
  wrapper.unmount();
});

it('renders a BlogNews Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<BlogNews />)).toEqual(true);
  wrapper.unmount();
});

it('renders a Footer Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Footer />)).toEqual(true);
  wrapper.unmount();
});

it('properly loads with our custom useLoaded hook', () => {
  const wrapper = shallow(
    <HookWrapper component={App} hook={() => useLoaded()} />
  );
  let { hook } = wrapper.props();
  let [loaded, load] = hook;
  expect(loaded).toEqual(false);
  load();
  // eslint-disable-next-line prefer-destructuring
  hook = wrapper.props().hook;
  [loaded, load] = hook;
  expect(loaded).toEqual(true);
  wrapper.unmount();
});

it('properly sets images with our custom useImages hook', async () => {
  const wrapper = shallow(
    <HookWrapper component={App} hook={() => useImages()} />
  );
  const { hook } = wrapper.props();
  let [images, setImages] = hook;
  const unsplashedImages = await request('/unsplash');
  localStorage.setItem('images', JSON.stringify(unsplashedImages));
  const lsImages = localStorage.getItem('images');
  if (lsImages) {
    setImages(JSON.parse(lsImages));
  }
  [images, setImages] = wrapper.props().hook;
  expect(JSON.stringify(images)).toEqual(localStorage.getItem('images'));
  wrapper.unmount();
});

it('checks localStorage and receives images from api', async () => {
  let images;
  localStorage.removeItem('images'); // from previous test

  if (!localStorage.getItem('images')) {
    await request('/unsplash')
      .then(res => {
        const stringify = JSON.stringify(res);
        images = stringify;
        localStorage.setItem('images', stringify);
      })
      .catch(err => console.log(err));
  }

  expect(localStorage.getItem('images')).toEqual(images);
});
