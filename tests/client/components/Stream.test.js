import React from 'react';
import { shallow } from 'enzyme';
import Stream from '../../../client/src/components/Stream';

describe('Stream', () => {
  const props = {
    episodes: [{ title: 'X' }, { title: 'Y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream { ...props } />);

    expect(element.find('.episode')).toHaveLength(2);
  });
});
