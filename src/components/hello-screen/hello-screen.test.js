import React from 'react';
import renderer from 'react-test-renderer';
import HelloScreen from '../hello-screen/hello-screen.jsx';

it(`App correctly renders`, () => {
  const tree = renderer
  .create(<HelloScreen
    totalTime={0}
    totalMistake={0}
    onClick={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
