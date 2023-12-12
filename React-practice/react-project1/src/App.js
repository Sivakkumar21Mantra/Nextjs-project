import "./App.css";
import Ecard from "./Ecard";
import emojipedia from "./emojiDefinitons";
import EventPractice from "./EventPractice";
import ToDoList from "./ToDoList";

function App() {
  console.log(emojipedia);
  var date = new Date();
  // const [date, setDate] = useState(new Date());

  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );

  // setInterval(() => {
  //   setDate(new Date());
  // }, 1000);

  function handlefn(elem) {
    return (
      <div>
        <Ecard
          emoji={elem.emoji}
          title={elem.name}
          description={elem.meaning}
        />
      </div>
    );
  }

  return (
    <div className="App">
      {element}
      <div className="ecards">{emojipedia.map(handlefn)}</div>
      <EventPractice />
      <ToDoList />
    </div>
  );
}
export default App;
