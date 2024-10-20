import React from 'react';
import { IonAvatar, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonTitle, IonToolbar } from "@ionic/react";
import { camera, chatboxEllipses, ellipsisVertical, pencil, person, qrCode, search } from 'ionicons/icons';


const Status = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Updates</IonTitle>
                    <IonButtons slot='end'>
            <IonButton>
                <IonIcon ios={qrCode} md={qrCode} ></IonIcon>
                </IonButton>
                <IonButton>
                <IonIcon ios={camera} md={camera} ></IonIcon>
                </IonButton>
                <IonButton>
                <IonIcon ios={search} md={search} ></IonIcon>
                </IonButton>
                <IonButton id = "status-click-trigger">
                <IonIcon ios={ellipsisVertical} md={ellipsisVertical} ></IonIcon>
                </IonButton >
                <IonPopover trigger="status-click-trigger" triggerAction="click">
                <IonContent>
                <IonList>
                      <IonItem>
                        <IonLabel>Satus Privacy</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Create Channelt</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Settings</IonLabel>
                      </IonItem>
                    
                    </IonList>
                </IonContent>
              </IonPopover>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
                <div className='update'>
                    <IonFab vertical='bottom' horizontal='end' slot='fixed' className='editbuttons'>
                        <IonFabButton >
                            <IonIcon icon={pencil}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                    <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                        <IonFabButton >
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                    Status
                </div>
                <div className='stories'>
                <button>
                <IonItem>
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>My updates</h2>
                        <p>No updates</p>
                    </IonLabel>
                    
                </IonItem></button>
                Recent updates
                <button>
                <IonItem>
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>Name</h2>
                        <p>Yesterday, 11:00 am</p>
                        
                    </IonLabel>
                   
                </IonItem></button>
                
                <button><IonItem>
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>Name</h2>
                        <p>Yesterday, 11:00 am</p>
                        
                    </IonLabel>
                   
                </IonItem></button>
                
                <button>
                <IonItem>
                    <IonAvatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>Name</h2>
                        <p>Yesterday, 11:00 am</p>
                        
                    </IonLabel>
                    
                </IonItem></button>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Status;