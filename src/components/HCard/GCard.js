

const GCard = (props) => {
  let name = "";

  props.group.users.forEach((user) => {
    if (+user.id !== +props._user.id) name = user.username;
  });

  return (
    <div > {name}</div>
  );
};

export default GCard;
