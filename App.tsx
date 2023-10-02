import { Provider } from 'react-redux';
import store from './redux/index.ts';

import { NavigationBlock } from './routes/NavigationBlock.tsx';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationBlock />
    </Provider>
  );
}
