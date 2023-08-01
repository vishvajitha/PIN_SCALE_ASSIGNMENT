import DashboardHeader from '../DashboardHeader'
import './index.css'

const Dashboard = () => (
  <div className="dash-container">
    <DashboardHeader />
    <div>
      <img
        src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690697640/Frame_497_lwutci.png"
        alt="credit"
        className="credit-img"
      />
      <img
        src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690697677/Frame_496_xljxuk.png"
        alt="debit"
        className="credit-img"
      />
    </div>
    <img
      src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690735513/Group_413_kisld5.png"
      alt="transactions"
    />
    <img
      src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690735647/Group_279_lfstxd.png"
      alt="bar"
    />
  </div>
)
export default Dashboard
