import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonNav, IonNavLink } from '@ionic/react';
import Welcome from '../components/Welcome'
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
    
      <IonToolbar>
        <IonTitle>Home Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h1>Home Page</h1>
      <Welcome />
      <IonButton routerLink='./Login'>Login</IonButton>
      <IonButton routerLink='./SignUp'>Login</IonButton>

    </IonContent>
  </IonPage>
);

export default Home;
