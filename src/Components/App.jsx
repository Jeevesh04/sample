import Dashboard from './Dashboard.jsx';
import Header from './header.jsx';

import { useActionState, useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div>
      <Header onLogoClick={toggleSidebar} />
      <Dashboard isOpen={isSidebarOpen}/>
    </div>
  );
}

export default App;
