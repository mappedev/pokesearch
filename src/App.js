import { useState } from "react";

import { usePokemon } from "./hooks/usePokemon";

export default function App() {
  const [id, setId] = useState("");
  const { pokemon, loading, error } = usePokemon(id);

  return (
    <div className="App">
      <label>Inserta el id del pokemon</label>
      <input
        type="number"
        placeholder="Solo números"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />
      <br />
      {loading && "Loading..."}
      {error && "Bad request"}
      {pokemon?.name}
    </div>
  );
}
