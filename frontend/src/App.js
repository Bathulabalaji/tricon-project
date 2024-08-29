import MyButton from "./components/Button/button";
import Greeting from "./pages/Home/home";
import Time from "./pages/Home/time";
import Welcome from "./pages/Home/welcome";

function App() {
  return (
    <div>
      <h2>Hello world</h2>
      <MyButton/>
      <Greeting name="Balaji"/>
      <Greeting name="yash"/>
      <MyButton/>
      <Welcome name="Balu"/>
      <Time/>
    </div>
  );
}
export default App;
