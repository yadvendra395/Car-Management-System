

import { MainComponent } from './Components/learning-examples/MainComponent';
const person ={
  name : 'Roshan',
  address : {
    line1: 'nathnagar',
    line2 :"london"
  },
    profile : ["twitter","linkdin","instagram"],
    printprofile : () => {
      person.profile.forEach(
        (profile) =>  console.log(profile)
        
      )
      console.log(person.profile[0])
    }

  }

function App() {
  return (
    <div>
    <div className="App">
      My Todo Application
      <MainComponent>aa</MainComponent>
      <h1>{person.name}</h1>
      <h2>{person.address.line1}</h2>
      <h3>{person.address.line2}</h3>
      <h1>{person.printprofile ()}</h1>
      </div>
    </div>

  );
}
export default App;
