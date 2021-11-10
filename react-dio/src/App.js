import Item from "./components/Item";

const App = () => {
  return (
    <>
      <h1>My first React app</h1>
      <ul>
        <Item texto="Item 1"/>
        <Item texto="Item 2"/>
      </ul>
    </>
  )
}

export default App;