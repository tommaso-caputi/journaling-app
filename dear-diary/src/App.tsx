import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainLog from './pages/Log/MainLog';
import Pin from './pages/Log/Pin/Pin';
import Login from './pages/Log/Login/Login';
import NewPin from './pages/Log/Pin/NewPin';
import Profile from './pages/Home/Profile/Profile';
import Homepage from './pages/Home/Homepage/Homepage';
import NewEntryMood from './pages/Home/NewEntry/NewEntryMood/NewEntryMood';
import NewEntryTopic from './pages/Home/NewEntry/NewEntryTopic/NewEntryTopic';
import NewEntry from './pages/Home/NewEntry/NewEntry';
import EditEntry from './pages/Home/NewEntry/EditEntry/EditEntry';

setupIonicReact({ mode: 'ios' });

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/mainlog">
          <MainLog />
        </Route>
        <Route exact path="/mainlog/pin">
          <Pin />
        </Route>
        <Route exact path="/mainlog/newpin">
          <NewPin />
        </Route>
        <Route exact path="/mainlog/login">
          <Login />
        </Route>

        <Route exact path="/mainhome">
          <Homepage />
        </Route>
        <Route exact path="/mainhome/newentrymood">
          <NewEntryMood />
        </Route>
        <Route exact path="/mainhome/newentrytopic">
          <NewEntryTopic />
        </Route>
        <Route exact path="/mainhome/newentry">
          <NewEntry />
        </Route>
        <Route exact path="/mainhome/editentry">
          <EditEntry />
        </Route>
        <Route exact path="/mainhome/profile">
          <Profile />
        </Route>


        <Route exact path="/">
          <Redirect to="/mainlog" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
