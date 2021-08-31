import './App.css';
import Body from './components/Body/Nav';
import Footer from './components/UI/Footer'
import { WidthContextProvider } from './store/width-context';

const App = () => {
  return (
    <WidthContextProvider>
      <Body />
      <Footer />
    </WidthContextProvider>
  );
}

export default App;
