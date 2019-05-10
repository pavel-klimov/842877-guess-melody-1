import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

it(`App corectly renders`, () => {
  const tree = renderer
  .create(<App />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
