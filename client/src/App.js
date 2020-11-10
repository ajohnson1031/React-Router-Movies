import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  let mov = useRouteMatch("/movies/:movie");
  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/'>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <Movie mov={mov} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
