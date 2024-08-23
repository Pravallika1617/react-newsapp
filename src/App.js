import React,{useState} from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import './App.css'


function App() {

  const[progress, setProgress]=useState(0);

  return (
      <div>
        <LoadingBar color='red' progress={progress}  height="5px"   onLoaderFinished={()=>setProgress(0)}/>

        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} />} />
          <Route path="/business" element={<News category="business" setProgress={setProgress}/>} />
          <Route path="/entertainment" element={<News category="entertainment" setProgress={setProgress}/>} />
          <Route path="/general" element={<News category="general" setProgress={setProgress}/>} />
          <Route path="/health" element={<News category="health" setProgress={setProgress}/>} />
          <Route path="/science" element={<News category="science" setProgress={setProgress}/>} />
          <Route path="/sports" element={<News category="sports" setProgress={setProgress}/>} />
          <Route path="/technology" element={<News category="technology" setProgress={setProgress} />} />
        </Routes>
      </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar';
// import './App.css'

// function App() {
//   const [progress, setProgress] = useState(0);

//   return (
//     <div>
//       <LoadingBar color='red' progress={progress} height="5px" onLoaderFinished={() => setProgress(0)} />

//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<News setProgress={setProgress} />} />
//         <Route path="/business" element={<News category="business" setProgress={setProgress} />} />
//         <Route path="/entertainment" element={<News category="entertainment" setProgress={setProgress} />} />
//         <Route path="/general" element={<News category="general" setProgress={setProgress} />} />
//         <Route path="/health" element={<News category="health" setProgress={setProgress} />} />
//         <Route path="/science" element={<News category="science" setProgress={setProgress} />} />
//         <Route path="/sports" element={<News category="sports" setProgress={setProgress} />} />
//         <Route path="/technology" element={<News category="technology" setProgress={setProgress} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
