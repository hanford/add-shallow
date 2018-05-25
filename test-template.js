import React from 'react'
import { shallow } from 'enzyme'

import Component from './index.js'

it('renders without props', () => {
  shallow(<Component />)
})
