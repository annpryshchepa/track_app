import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';

// const click = () => console.log('click');
//TODO use these buttons 
{/* <Button
content="start"
onClickAction={click}
isOutline
buttonIcon="start"
/>
<Button
content="stop"
onClickAction={click}
isOutline
buttonIcon="stop"
/>
<Button
          content="shutdown"
          onClickAction={click}
          className="shutdown"
        />
         <Button
          content="cancel shutdown"
          onClickAction={click}
          className="cancel-shutdown"
        /> */}


export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
