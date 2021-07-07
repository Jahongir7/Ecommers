import React, { useState } from "react";
import "./App.css";
import dates from "./data";

const App = () => {
  const [visible, setVisible] = useState(3);
  const [showButton, setShowButton] = useState(true);

  const showMoreItems = () => {
    setVisible((visible) => {
      if (visible <= 3) {
        setShowButton(true);
      }
      return visible + 3;
    });
  };

  // useEffect ishlatishing garak

  const decrement = () => {
    setVisible((visible) => {
      console.log(visible);
      if (visible <= 3) {
        setShowButton(false);
      }
      return visible - 3;
    });
  };

  return (
    <div className="App">
      <div className="container">
        {dates.slice(0, visible).map((question) => {
          return (
            <div className="nagap" key={question.id}>
              <div className="id">{question.id}</div>
              <div className="q-body">{question.body}</div>
            </div>
          );
        })}
        <button onClick={showMoreItems}>Load More</button>
        {showButton && <button onClick={decrement}>decrement</button>}
      </div>
    </div>
  );
};

export default App;
