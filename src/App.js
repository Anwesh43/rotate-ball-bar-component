import React from 'react';
import logo from './logo.svg';
import './App.css';
import RotateBarBall from './RotateBarBall'
import {useDimension, useAnimatedScale} from './hooks'

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02, 30)
  return (
    <div className="App">
      <RotateBarBall w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
  );
}

export default App;
