import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HelloScreen from '../hello-screen/hello-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on start game button correctly work`, () => {
  const onClick = jest.fn();
  const helloScreen = shallow(<HelloScreen
    totalTime={0}
    totalMistake={0}
    onClick={onClick}
  />);

  const startButton = helloScreen.find(`button`);
  startButton.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
