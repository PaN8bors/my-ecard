import DefaultCard, { ImportCard } from './Card';
import Customize from './Customize';
import './App.css';

export default function App() {
  let app;
  if (window.location.pathname.length > 1) {
    // 1 = everything after the slash of the URL
    const encoded = window.location.pathname.slice(1);
    app = (
      <div className='app'>
        <ImportCard encoded={encoded}></ImportCard>
      </div>
    )
  } else {
    app = (
      <div className='app'>
        <Customize></Customize>
        {/* This doesn't work yet 🙁 */}
        <div>
          <h1>Your Card 🎁</h1>
          <DefaultCard></DefaultCard>
        </div>
      </div>
    );
  }
  return app;
}
