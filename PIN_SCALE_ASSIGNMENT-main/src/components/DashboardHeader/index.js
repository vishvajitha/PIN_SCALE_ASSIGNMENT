import './index.css'

const DashboardHeader = () => (
  <nav>
    <div className="dash-head-container">
      <h1>Accounts</h1>
      <button type="button" className="transaction-btn">
        + Add Transaction
      </button>
    </div>
    <hr />
  </nav>
)
export default DashboardHeader
