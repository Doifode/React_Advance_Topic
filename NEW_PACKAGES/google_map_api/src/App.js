/**
 * The function defines the routing for a React app with different components for downloading files,
 * reading text, using a webcam, and displaying time zones.
 * 
 * @return The App component is being returned, which contains a BrowserRouter component with nested
 * Route and Routes components. The Route components define the paths and corresponding components to
 * render when those paths are accessed. The Home component is the default component to render when the
 * root path is accessed.
 */
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './Components/Home';
import { DownloadAnyFile } from './Components/DownloadAnyFile';
import { TextReader } from './Components/TextReader';
import { WebCam } from './Components/WebCam';
import { TimeZone } from './Components/TimeZone';
// import PreventURLMatch from './Components/PreventURLMatch';
import Pdfviewer from './Components/Pdfviewer';
import VoiceListener from './Components/VoiceListener';
import { TextEditor } from './Components/TextEditor';
// import { Charts } from './Components/Charts';
// import PreventReloding from './Components/PreventReloding';


function App() {
  // useEffect(() => {
  //   // Check if the browser supports the chrome.tabs API
  //   if (typeof chrome.tabs !== 'undefined') {
  //     // Query the active tab
  //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //       // The information about the active tab is available in the "tabs" parameter
  //       var activeTab = tabs[0];

  //       // Access the properties of the active tab
  //       var tabId = activeTab.id;
  //       var tabTitle = activeTab.title;
  //       var tabUrl = activeTab.url;

  //       // Do something with the tab information
  //       console.log('Tab ID:', tabId);
  //       console.log('Tab Title:', tabTitle);
  //       console.log('Tab URL:', tabUrl);
  //     });
  //   }

  // }, [])



  return (
    <div>
      {/* <PreventReloding /> */}
      {/* <PreventURLMatch /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/downloadAnyFile' element={<DownloadAnyFile />} />
            <Route path='/textReader' element={<TextReader />} />
            <Route path='/webcam' element={<WebCam />} />
            <Route path='/TimeZone' element={<TimeZone />} />
            <Route path='/PdfViewer' element={<Pdfviewer />} />
            <Route path='/voiceListener' element={<VoiceListener />} />
            <Route path='/TextEditor' element={<TextEditor />} />
            {/* <Route path='/chartsApp' element={<Charts />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>My Map</h1> */}
      {/* <Maps /> */}
      {/* <Buttons /> */}
    </div>
  );
}

export default App;
