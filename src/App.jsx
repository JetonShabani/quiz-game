import "./app.css";
import {useState} from "react";
import Trivia from "./components/Quizz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
//all in the right 
  const moneyPyramid = [
    { id:1, amount:"€ 100,00" },

    { id:2, amount:"€ 200,00" },

    { id:3, amount:"€ 300,00" },

    { id:4, amount:"€ 500,00" },

    { id:5, amount:"€ 1.000,00" },

    { id:6, amount:"€ 2.000,00" },

    { id:7, amount:"€ 4.000,00" },

    { id:8, amount:"€ 8.000,00" },

    { id:9, amount:"€ 16.000,00" },

    { id:10, amount:"€ 32.000,00" },

    { id:11, amount:"€ 64.000,00" },

    { id:12, amount:"€ 125.000,00" },

    { id:13, amount:"€ 250.000,00" },

    { id:14, amount:"€ 500.000,00" },

    { id:15, amount:"€ 1.000.000,00" },

  ].reverse();

  return (
    <div className="App">

      <div className="main">

        <div className="top">

          <div className="timer">30</div>

        </div>

        <div className="bottom">

          <Trivia />

        </div>

      </div>

      <div className="pyramid">

        <ul className="moneyList">
          
          {moneyPyramid.map((m) => (
          <li className= {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
           ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
