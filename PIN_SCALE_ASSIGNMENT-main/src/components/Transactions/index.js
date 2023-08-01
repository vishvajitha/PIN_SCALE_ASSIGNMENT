import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {Component} from 'react'
import './index.css'

class Transactions extends Component {
  componentDidMount() {
    this.getTransactions()
  }

  getTransactions = async () => {
    const response = await fetch(
      'https://bursting-gelding-24.hasura.app/api/rest/profile',
    )
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="trans-container">
        <div className="trans-first-container">
          <h1>Transactions</h1>
          <div>
            <Popup
              trigger={
                <button type="button" className="trans-btn">
                  + Add Transaction
                </button>
              }
              position="bottom right"
            >
              <div className="trans-popup">
                <h1>Add Transaction</h1>
                <p>Loreum ipsum dolor sit amet, consectuter</p>
                <form>
                  <label htmlFor="transactionName">Transaction Name</label>
                  <br />
                  <input type="text" />
                  <br />
                  <lable htmlFor="transactionType">Transaction Type</lable>
                  <br />
                  <select>
                    <option>Credit</option>
                    <option>Debit</option>
                  </select>
                  <br />
                  <label htmlFor="category">Category</label>
                  <br />
                  <select>
                    <option>Shopping</option>
                    <option>Service</option>
                  </select>
                  <label htmlFor="amount">Amount</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label htmlFor="date">Date</label>
                  <br />
                  <input type="text" />
                  <br />
                  <button type="button" className="trans-btn">
                    Add Transaction
                  </button>
                </form>
              </div>
            </Popup>
          </div>
        </div>
        <div className="hyper-container">
          <Link to="/alltransactions">
            <p className="space">All Transactions</p>
          </Link>
          <Link to="/credit">
            <p className="space">Credit</p>
          </Link>
          <Link to="/debit">
            <p className="space">Debit</p>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690735864/Frame_472_aqbbq9.png"
          alt="transaction"
        />
      </div>
    )
  }
}

export default Transactions
