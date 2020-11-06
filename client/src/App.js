import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router>
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
