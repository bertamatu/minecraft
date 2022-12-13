import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FPV } from './components/FPV';
import { Ground } from './components/Ground';
import { Player } from './components/Player';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 70, 100]}/>
        <ambientLight intensity={0.5}/>
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
