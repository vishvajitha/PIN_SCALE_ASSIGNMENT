import './index.css'

const Profile = () => (
  <div className="profile-container">
    <img
      src="https://res.cloudinary.com/dedvz7flb/image/upload/v1690733213/Group_206_ognawd.png"
      alt="profilePic"
      className="profile"
    />
    <div>
      <form className="form">
        <label htmlFor="username">Your Name</label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="DateOfBirth">Date of Birth</label>
        <br />
        <input type="date" className="input-el" />
        <br />
        <label htmlFor="PermanentAdd">Permanent Address</label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="PostalCode">Postal Code</label>
        <br />
        <input type="text" className="input-el" />
      </form>
    </div>
    <div>
      <form className="form">
        <label htmlFor="username" className="name">
          Your Name
        </label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="email" className="name">
          Email
        </label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="DateOfBirth" className="name">
          Date of Birth
        </label>
        <br />
        <input type="date" className="input-el" />
        <br />
        <label htmlFor="PermanentAdd" className="name">
          Permanent Address
        </label>
        <br />
        <input type="text" className="input-el" />
        <br />
        <label htmlFor="PostalCode" className="name">
          Postal Code
        </label>
        <br />
        <input type="text" className="input-el" />
      </form>
    </div>
  </div>
)
export default Profile
