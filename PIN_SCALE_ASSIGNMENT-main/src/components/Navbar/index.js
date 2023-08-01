import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Navbar = () => (
  <div className="container">
    <div>
      <img
        src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690691528/Logo_mwe4ia.png"
        alt="website-logo"
      />
      <Link to="/dashboard" className="nav-container">
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690692745/home_2_1_boscpe.png"
          alt="dashboard"
          className="icon"
        />
        <h1>Dashboard</h1>
      </Link>
      <Link to="/transactions" className="nav-container">
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690692996/transfer_1_o5dqxu.png"
          alt="transactions"
          className="icon"
        />
        <h1>Transactions</h1>
      </Link>
      <Link to="/profile" className="nav-container">
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690693070/user_3_1_mmcny2.png"
          alt="transactions"
          className="icon"
        />
        <h1>Profile</h1>
      </Link>
    </div>
    <div className="lower-profile">
      <img
        src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690732588/Avatar_gtwywh.png"
        alt="avatar"
        className="avatar"
      />
      <div>
        <h1>Rhye</h1>
        <p>olivia@untitledui.com</p>
      </div>
      <div>
        <Popup
          trigger={
            <button type="button" className="trigger-button">
              <img
                src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690732852/log-out-01_i2oca5.png"
                alt="logout"
              />
            </button>
          }
          position="right"
        >
          <div className="popup-text">
            <div className="first-popup">
              <img
                src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690761784/Group_848_zitmxv.png"
                alt="logout-btn"
              />
              <div>
                <p>Are you sure you want to Logout?</p>
                <p>
                  Loreum ipsum dolor sit amet, consectetur adipscing elit, sed
                </p>
              </div>
              <button type="button">X</button>
            </div>
            <div>
              <button type="button" className="yes">
                Yes Logout
              </button>
              <button type="button" className="cancel">
                Cancel
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  </div>
)
export default Navbar
