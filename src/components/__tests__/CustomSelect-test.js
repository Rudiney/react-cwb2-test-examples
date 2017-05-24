import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

import CustomSelect from '../CustomSelect.js'

describe('no value and a placeholder', function() {
  it('renders the placeholder', () => {
    const tree = renderer.create(<CustomSelect value={undefined} placeholder='select...'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with a value', function() {
  it('display the value in the button', () => {
    const tree = renderer.create(<CustomSelect value='I am selected' placeholder='select...'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('the dropdown', function() {
  const options = {
    1: 'One',
    2: 'Two',
    3: 'Three',
  }

  it('clicks to toggle', () => {
    const wrapper = shallow(<CustomSelect options={options} />)
    expect(wrapper.state().isOpen).toBe(false)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.state().isOpen).toBe(true)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.state().isOpen).toBe(false)
  })

  it('renders a ul>li with the options', function() {
    const wrapper = shallow(<CustomSelect options={options} />)
    wrapper.setState({ isOpen: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('triggers a onChange', function() {
    const onChange = jest.fn()
    const wrapper = shallow(<CustomSelect options={options} onChange={onChange} />)
    wrapper.setState({ isOpen: true })
    expect(onChange).not.toBeCalled()
    wrapper.find('ul li').at(1).simulate('click')
    expect(onChange).toBeCalledWith('2')
  })

  it('triggers a onOpen', function() {
    const onOpen = jest.fn()
    const wrapper = shallow(<CustomSelect options={options} onOpen={onOpen} />)
    wrapper.setState({ isOpen: true })
    wrapper.find('button').first().simulate('click')
    expect(onOpen).not.toBeCalled()
    wrapper.find('button').first().simulate('click')
    expect(onOpen).toBeCalled()
  })
})
