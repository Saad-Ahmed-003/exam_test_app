import './App.css';

import Header from './components/header';
import Add_question from './components/add_question';
import Login from './components/loogin';
import Question from './components/questions';

function App() {
  return (
    <div className=''>
      <Header />
      <div className='container'>
        <Add_question />
        {/* <Login /> */}
        {/* <Question/> */}
      </div>
    </div>
  );
}

export default App;
