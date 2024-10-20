import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonTitle, IonToolbar } from "@ionic/react";
import { qrCode, camera, search, ellipsisVertical, peopleCircle, addCircle } from "ionicons/icons";

const Communities: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><h1>Communities</h1></IonTitle>
                    <IonButtons slot='end'>
            <IonButton>
                <IonIcon ios={qrCode} md={qrCode} ></IonIcon>
                </IonButton>
                <IonButton>
                <IonIcon ios={camera} md={camera} ></IonIcon>
                </IonButton>
                
                <IonButton id = "community-options">
                <IonIcon ios={ellipsisVertical} md={ellipsisVertical} ></IonIcon>
                </IonButton>
                </IonButtons>
                <IonPopover trigger="community-options" triggerAction="click">
                    <IonContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Settings</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonPopover>
                
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="communities">
                    <IonButton fill="clear">
                        <IonItem>
                            <IonIcon md = {addCircle} ios={addCircle}></IonIcon>
                            <IonLabel>
                                <h2>New Community</h2>
                            </IonLabel>
                        </IonItem>
                    </IonButton>
                    <IonButton fill="clear">
                        <IonItem>
                            <IonIcon md = {peopleCircle} ios={peopleCircle}></IonIcon>
                            <IonLabel>
                                <h2>Community 1</h2>
                            </IonLabel>
                        </IonItem>
                    </IonButton>
                    <IonButton fill="clear">
                        <IonItem>
                            <IonIcon md = {peopleCircle} ios={peopleCircle}></IonIcon>
                            <IonLabel>
                                <h2>Community 2</h2>
                            </IonLabel>
                        </IonItem>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Communities;