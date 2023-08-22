import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Question from './components/questions';

function App() {
  return (
    <div className=''>
      <Header />
      <div className='container'>
        <Question/>
      </div>
    </div>
  );
}

export default App;
