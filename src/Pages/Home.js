import { Fragment } from "react";
import Header from "../Header/Header";

function Home() {
  return (
    <Fragment>
      <Header />
      <div className="card m-3">
        <div className="card-body">
          <div className="card-title">
            <h3>TOURS</h3>
          </div>
          <div className="card-text d-md-flex">
            <ul className="list-group">
              <li className="list-group-item">
                JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE BUY TICKETS
              </li>
              <li className="list-group-item">
                JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE BUY TICKETS
              </li>
              <li className="list-group-item">
                JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE BUY TICKETS
              </li>
              <li className="list-group-item">
                JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE BUY TICKETS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
