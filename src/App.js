import './App.css';
import Button from './components/Button/Button';
import Hero from './components/Hero/Hero';
import Notification from './components/Notifications/Notifications';

function App() {
  return (
    <div className='App'>
      <h1>CAO</h1>
      <h2>BUTTONS</h2>
      <Button variant='primary' size='large'>
        Primary
      </Button>
      <Button variant='secondary' size='large'>
        Secondary
      </Button>
      <h2>NOTIFICATIONS</h2>
      <div className='alerts'>
        <Notification variant='success'>This is a success alert</Notification>
        <Notification variant='danger'>This is a danger alert</Notification>
        <Notification variant='warning'>This is a warning alert</Notification>
        <Notification variant='info'>This is an info alert</Notification>
      </div>
      <div className='hero'>
        <div className='hero'>
          <Hero type='primary' title='Primary hero' subtitle='Primary subtitle' />
        </div>
      </div>
    </div>
  );
}

export default App;
