import React from 'react'
import {shallow} from 'enzyme'
import Button from './component'

describe('Button', () => {
  it('button renders with text', () => {
    const wrapper = shallow(<Button
      text="Submit"
      action={() => null}
    />)

    expect(wrapper.find('button.button').text()).toBe('Submit')
  })
})
