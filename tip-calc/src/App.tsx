import './App.css';
import ChildComponent from './components/ChildComponent';

export default function App() {
  return (
    <div style={styles.container}>
      <ChildComponent />
    </div>
  );
}

const styles = {
  container: {
    height: 200,
    width: 200,
    border: '5px solid blue',
  },
};
