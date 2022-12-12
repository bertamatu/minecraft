import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 70, 100]}/>
        <ambientLight intensity={0.5}/>
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
