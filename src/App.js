import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 70, 100]}/>
      </Canvas>
    </>
  );
}

export default App;
