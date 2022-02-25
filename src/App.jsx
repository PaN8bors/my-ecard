import DefaultCard, { ImportCard } from "./Card";
import Customize from "./Customize";
import Header from "./Header";
import StyledCard from "./StyledCard";
import TopBox from "./TopBox";
import "./App.css";

export default function App() {
  let app;
  if (window.location.pathname.length > 1) {
    // 1 = everything after the slash of the URL
    const encoded = window.location.pathname.slice(1);
    app = (
      <div className="app">
        <ImportCard encoded={encoded}></ImportCard>
      </div>
    );
  } else {
    app = (
      <div className="some-page-wrapper">
        <div>
            <TopBox></TopBox>
        </div>


        <div className="row">
          <div className="column">
              <Header></Header>
          </div>
          <div className="column">
            <div className="you-see">
              <h1>What You See Is What You Get</h1>
            </div>
          </div>
        </div>
{/* end of row one */}

        <div className="row">
          <div className="column">
            <div className="style-card">
              <h1>Style Your Card</h1>
            </div>
          </div>
          <div className="column">
            <StyledCard></StyledCard>
          </div>
        </div>
{/* end of row 2 */}

        <div className="row">
          <div className="column">
            <div className="customize">
              <Customize></Customize>
            </div>
          </div>
          <div className="column">
          </div>
        </div>
      </div>
// end of row three
    );
  }

  return app;
}