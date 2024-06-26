function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  );
}

export default App;

 



function Logo(){
  return(
  <h1>🏝️ Far Away 💼</h1>);
}

function Form() {
  return(
    <div className="add-form">
      <h2>What do you need for your 😍 trip?</h2>
    </div>
  );
  
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function PackingList() {
  return(
    <div className="list">
      <li>{initialItems.map((item)=>(
        <Item item={item}/>
      ))}</li>
    </div>
  );
}

function Item({item}){
  return(
    <li>
      <span style={item.packed?{textDecoration:"line-through"}:{}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
    
  )
}

function Stats(){
return<>
<footer className="stats">
  <em>💼 You have X items on your list, and you already packed X (X%)</em>
</footer>
</>
}