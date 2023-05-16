import './App.css';
import Herosection from './hero-section/heroSection';

function App() {
const testArray = [{name:'charles', age:10 ,eligible:true },{name:'mike',age:20, eligible: false}, {name:'justin', age: 34, eligible: true}]
let checking;
checking = testArray.filter((back)=>{ 
})
console.log(checking)


  console.log('hello world')
  return (
    <div className="App">
      <div>Hi Guys</div>
      <Herosection/>
    </div>
  );
}

export default App;
