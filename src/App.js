
import './App.css';
import Main from './components/Main/Main';


// Добавлять новые задачи в список
// Отмечать выполненные задачи (при этом они сразу исключаются из списка активных задач и переводятся в завершенный)
// Удалять элементы в корзину
// Удалять окончательно задачи в корзине, а также при необходимости восстанавливать их
// Переключаться между делами (активными завершенными и удаленными)

export default function App() {



  return (
    <div className="App">
      <header>
        <h1 className='title'>Simple To Do List</h1>
        <p className='greetings'>Today is awesome day. The weather is awesome, you are awesome too!</p>
      </header>

      <Main />

      <footer className='footer inter500'>
        <div>Made with ❤️ at nFactorial in 2023.</div>
        <div className='inter500-pro'>
          Credits: icons from <a href="https://icons8.com/">Icons8</a>.
        </div>
      </footer>
    </div>
  );
}
