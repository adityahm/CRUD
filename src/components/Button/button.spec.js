import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './component';
import { findTestWrapper } from '../../utils';

library.add(faUserCircle);

describe('Button Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Button
          action={() => null}
          type="submit"
          text="Submit"
          icon="user-circle"
          iconSize="lg"
          iconButton
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('button renders with text', () => {
    const wrapper = shallow(<Button text="Submit" action={() => null} />);

    expect(findTestWrapper(wrapper, 'button-component').text()).toBe('Submit');
  });

  it('button action is called on click', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button text="Click" action={mockFn} />);

    wrapper.simulate('click');

    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('button renders with proper type', () => {
    const wrapper = shallow(
      <Button type="reset" text="Click" action={() => null} />
    );

    expect(findTestWrapper(wrapper, 'button-component').prop('type')).toBe(
      'reset'
    );
  });

  it('button renders children', () => {
    const wrapper = shallow(
      <Button type="reset" text="Click" action={() => null}>
        <span>#</span>
      </Button>
    );

    expect(
      findTestWrapper(wrapper, 'button-component').contains(<span>#</span>)
    ).toBeTruthy();
  });
});
