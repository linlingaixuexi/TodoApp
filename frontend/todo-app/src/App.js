import React, { Component } from 'react';
import FirstComponent from './components/learning_examples/FirstComponent'
import SecondComponent from './components/learning_examples/SecondComponent'
import ThirdComponent from './components/learning_examples/ThirdComponent'
import TodoApp from './components/todo/TodoApp';
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Counter/> */}
      <TodoApp></TodoApp>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    )
  }
}
export default App;


