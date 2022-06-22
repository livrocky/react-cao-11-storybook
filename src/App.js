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
        <Notification icon={'fa fa-check'} variant='success' cancel={'fa fa-times'}>
          This is a success alert
        </Notification>
        <Notification icon={'fa fa-flag'} variant='danger' cancel={'fa fa-times'}>
          This is a danger alert
        </Notification>
        <Notification icon={'fa fa-exclamation-triangle'} variant='warning' cancel={'fa fa-times'}>
          This is a warning alert
        </Notification>
        <Notification icon={'fa fa-info'} variant='info' cancel={'fa fa-times'}>
          This is an info alert
        </Notification>
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
