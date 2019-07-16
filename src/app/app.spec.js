import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import App from './index';

library.add(faUserCircle);

describe('App', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <App>
            <div>App Wrapper</div>
          </App>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
