import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { people, radio, call, ellipsisVertical, camera, chatboxEllipses, person, checkmarkDone } from 'ionicons/icons';
import Chats from './chatpage/Chat';
import Status from './statuspage/Status';
import Call from './Callpage/Call';
import Communities from './CommunitiesPage/Communties';




function Example() {
  return (

    <IonPage>
      
      

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <Chats />} exact={true} />
          <Route path="/status" render={() => <Status />} exact={true} />
          <Route path="/communities" render={() => <Communities />} exact={true} />
          <Route path="/calls" render={() => <Call />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={chatboxEllipses} />
            <IonLabel>Chats</IonLabel>
          </IonTabButton>

          <IonTabButton tab="status" href="/status">
            <IonIcon icon={radio} />
            <IonLabel>Updates</IonLabel>
          </IonTabButton>

          <IonTabButton tab="communities" href="/communities">
            <IonIcon icon={people} />
            <IonLabel>Communities</IonLabel>
          </IonTabButton>

          <IonTabButton tab="calls" href="/calls">
            <IonIcon icon={call} />
            <IonLabel>Calls</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </IonPage>
  );
}
export default Example;