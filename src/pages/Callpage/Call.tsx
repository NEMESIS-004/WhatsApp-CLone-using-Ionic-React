import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonTitle, IonToolbar } from "@ionic/react";
import { qrCode, camera, search, ellipsisVertical, heartCircle, call, person } from "ionicons/icons";

const  Call: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Calls</IonTitle>
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
                <IonButton id="call-options">
                <IonIcon ios={ellipsisVertical} md={ellipsisVertical} ></IonIcon>
                </IonButton>
                <IonPopover trigger="call-options" triggerAction="click">
                    <IonContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Clear Call Log</IonLabel>
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
                <div className="calls">
                    Favourites
                    <button>
                        <IonItem>
                            <IonIcon ios={heartCircle} md={heartCircle}></IonIcon>
                            <IonLabel>
                                <h2>Add Favourite</h2>
                            </IonLabel>
                        </IonItem>
                    </button>
                    Recent
                    <button>
                        <IonItem>
                            <IonIcon ios={person} md={person}></IonIcon>
                            <IonLabel>
                                <h2>Name</h2>
                                
                                <p>October 17, 10:00 am</p>
                                
                            </IonLabel>
                            <IonButton fill="clear">
                                <IonIcon ios={call} md={call}></IonIcon>
                            </IonButton>
                        </IonItem>
                    </button>
                    <button>
                        <IonItem>
                            <IonIcon ios={person} md={person}></IonIcon>
                            <IonLabel>
                                <h2>Name</h2>
                                
                                <p>October 17, 10:00 am</p>
                            </IonLabel>
                            <IonButton fill="clear">
                                <IonIcon ios={call} md={call}></IonIcon>
                            </IonButton>
                        </IonItem>
                    </button>
                    <button>
                        <IonItem>
                            <IonIcon ios={person} md={person}></IonIcon>
                            <IonLabel>
                                <h2>Name</h2>
                                
                                <p>October 17, 10:00 am</p>
                            </IonLabel>
                            <IonButton fill="clear">
                                <IonIcon ios={call} md={call}></IonIcon>
                            </IonButton>
                        </IonItem>
                    </button>
                    <button>
                        <IonItem>
                            <IonIcon ios={person} md={person}></IonIcon>
                            <IonLabel>
                                <h2>Name</h2>
                                
                                <p>October 17, 10:00 am</p>
                            </IonLabel>
                            <IonButton fill="clear">
                                <IonIcon ios={call} md={call}></IonIcon>
                            </IonButton>
                        </IonItem>
                    </button>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Call;