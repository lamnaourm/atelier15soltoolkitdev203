import './App.css';
import AddBudget from './components/AddBudget';
import AddDepense from './components/AddDepense';
import Header from './components/Header';
import ListDepenses from './components/ListDepenses';
import Stats from './components/Stats';

function App() {
  return (
    <div className="container">
      <Header />
      <Stats />
      <div className='content'>
        <div className='add'>
          <AddBudget />
          <AddDepense />
        </div>
        <ListDepenses />
      </div>

    </div>
  );
}

export default App;
