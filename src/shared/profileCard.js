import '../styles/profileCard.css';

const ProfileCardComponent = props => {
  console.log(props);
  const cardData = props.cardData;
  let fullName = cardData.fname + ' ' + cardData.lname;
  const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();

  return <div className="card UserCard">
    <div className="profileImage">
      {intials}
    </div>
    <h4>{cardData.fname} {cardData.lname}</h4>
    <h5 className="UserCardTitle">{cardData.role}</h5>
    <p>{cardData.contact}</p>
    <p><strong>{cardData.mail}</strong></p>
    <p>{cardData.location}</p>
  </div>
}

export default ProfileCardComponent;