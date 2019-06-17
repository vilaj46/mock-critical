import React from 'react';
import PropTypes from 'prop-types';

export default function HookWrapper({ component: Component, hook }) {
  const newHook = hook ? hook() : undefined;
  return <Component hook={newHook} />;
}

HookWrapper.propTypes = {
  hook: PropTypes.func,
  component: PropTypes.func,
};
