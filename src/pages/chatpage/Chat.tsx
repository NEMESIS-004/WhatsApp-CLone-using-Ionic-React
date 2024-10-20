import { IonAvatar, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { qrCode, ellipsisVertical, camera, chatboxEllipses, person, checkmarkDone } from 'ionicons/icons';
import ExploreContainer from '../../components/ExploreContainer';


const Chats: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle>WhatsApp</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonIcon ios={qrCode} md={qrCode} ></IonIcon>
              </IonButton>
              <IonButton>
              <IonIcon ios={camera} md={camera} ></IonIcon>
              </IonButton>
              <IonButton id="click-trigger">
              <IonIcon  ios={ellipsisVertical} md={ellipsisVertical} ></IonIcon>
              </IonButton>
              <IonPopover trigger="click-trigger" triggerAction="click">
                <IonContent class="ion-padding">
                <IonList>
                      <IonItem>
                        <IonLabel>New group</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>New Broadcast</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Linked Devices</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Starred Messages</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Payment Settings</IonLabel>
                      </IonItem>
                    </IonList>
                </IonContent>
              </IonPopover>
            </IonButtons>
        </IonToolbar>
        <IonSearchbar showClearButton="focus" placeholder="Ask Meta AI or Search"></IonSearchbar>

        {/* <IonSegment value="Chats">
          <IonSegmentButton value="camera">
            <IonIcon ios={camera} md = {camera}></IonIcon>
          </IonSegmentButton>
          <IonSegmentButton value="Chats">
            <IonLabel>Chats</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Status">
            <IonLabel>Status</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Calls">
            <IonLabel>Calls</IonLabel>
          </IonSegmentButton>
        </IonSegment> */}

    </IonHeader>
      <IonContent fullscreen>
        
      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton>
          <IonIcon icon={chatboxEllipses}></IonIcon>
        </IonFabButton>
      </IonFab>

    <div className="ion-padding">
     
    <IonItem>
      <IonAvatar slot='start'>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
      <IonLabel>
        <h2>Name</h2>
        <p> <IonIcon className='read' ios={checkmarkDone} md = {checkmarkDone}></IonIcon>Hi There</p>
      </IonLabel>
      <IonLabel slot='end' className='ion-text-right'>
      <p>&nbsp;</p>
      <p>04-10-2024</p>
        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonAvatar slot='start'>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
      <IonLabel>
        <h2>Name</h2>
        <p><IonIcon ios={checkmarkDone} md = {checkmarkDone}></IonIcon>Hi There</p>
      </IonLabel>
      <IonLabel slot='end' className='ion-text-right'>
      <p>&nbsp;</p>
      <p>04-10-2024</p>
        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonAvatar slot='start'>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
      <IonLabel>
        <h2>Name</h2>
        <p><IonIcon ios={checkmarkDone} md = {checkmarkDone}></IonIcon>Hi There</p>
      </IonLabel>
      <IonLabel slot='end' className='ion-text-right'>
      <p>&nbsp;</p>
      <p>04-10-2024</p>
        
      </IonLabel>
    </IonItem>
  </div>    

    </IonContent>
    </IonPage>
  );
};

export default Chats;
