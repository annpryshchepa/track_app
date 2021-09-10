import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { Dashboard, HomePage } from './components';
import classnames from 'classnames';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
  

/* eslint-disable no-lone-blocks */
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
  const home = 'home';
  const dashboard = 'dashboard';
  const [activeTab, setActiveTab] = useState(home);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="App">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === home })}
            onClick={() => { toggle(home); }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === dashboard })}
            onClick={() => { toggle(dashboard); }}
          >
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={home}>
              <HomePage />
        </TabPane>
        <TabPane tabId={dashboard}>
              <Dashboard />
        </TabPane>
      </TabContent>
    </div>
  );
}
