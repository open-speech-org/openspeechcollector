import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore, {history} from "./store/configureStore";
import {Provider} from "react-redux";
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  ReactDOM.render(
      <Provider store={store}>
      <App history={history} />
      </Provider>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});


it('shallow app component snapshot', () => {
    const component = shallow(<App history={history} />);
    expect(component).toMatchSnapshot();
});