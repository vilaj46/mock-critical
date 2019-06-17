const localStorage = (function() {
  const store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorage });
