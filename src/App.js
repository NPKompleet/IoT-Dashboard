import { useEffect } from 'react';
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import { loadPageScript } from './utils/pagescript';

function App() {
  useEffect(() => {
    loadPageScript();
  })

  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar/>
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
