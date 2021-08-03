//
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ChatDiv, FlexStyle, GroupDiv } from "../../styles";
import { Modal, Button } from "react-bootstrap";

//components
import Chat from "../Chat";
import GCard from "../HCard/GCard";
import Send from "../Send";
//images
import Group1 from "../../images/Group1.png";
import Group2 from "../../images/Group2.png";
import Group3 from "../../images/Group3.png";
import GroupChatForm from "./GroupChatForm";

const Group = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const groups = useSelector((state) => state.groups.groups);
  const loading2 = useSelector((state) => state.groups.loading);

  const [wanted, setWanted] = useState(null);
  const [show, setShow] = useState(false);

  if (!_user) history.push("/");

  if (loading || loading2) return <h2>loading !!!</h2>;

  const user = users.find((user) => +_user.id === +user.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filteredList = groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.userId === _user.id) keep = true;
      });
      return keep;
    })
    .map((group) => (
      <div className="c100" onClick={() => setWanted(group)}>
        <GCard group={group} _user={_user} />
      </div>
    ));

  return (
    <FlexStyle>
      <div className="b18">
        <div className="b19"></div>
        <div className="b22"></div>
        <img
          className="b23"
          src="https://image.flaticon.com/icons/png/128/5247/5247759.png"
          alt="b23"
        />
        <img
          onClick={() => history.push("/profile")}
          className="b24"
          src="https://image.flaticon.com/icons/png/128/747/747376.png"
          alt="b23"
        />
        <img
          className="b25"
          src="https://image.flaticon.com/icons/png/128/1370/1370907.png"
          alt="b23"
        />
        <img
          onClick={handleShow}
          className="b26"
          src="https://image.flaticon.com/icons/png/128/1234/1234127.png"
          alt="b23"
        />
        <img
          className="b27"
          src="https://image.flaticon.com/icons/png/128/4812/4812717.png"
          alt="b23"
        />
        <img
          className="b28"
          src="https://image.flaticon.com/icons/png/128/2928/2928989.png"
          alt="b23"
        />
        <img
          className="b29"
          src="https://image.flaticon.com/icons/png/128/503/503819.png"
          alt="b23"
        />
        <img
          className="b30"
          src="https://image.flaticon.com/icons/png/128/2370/2370264.png"
          alt="b23"
        />
        <div className="a1"></div>
        <img className="p1" src={Group1} alt={"pic1"} />
        <div className="p2"></div>
        <div className="p3">Search for a friend</div>
        <img className="p4" src={Group2} alt="b23" />
        <div className="l1"></div>
        <img className="l2" src={Group3} alt="b23" />
        <div className="l3"></div>
        <div className="l8"></div>
        <img className="l10" src={user.profile.image} alt="b23" />
        <div className="l11">{_user.username}</div>
        <div className="l12">Available</div>
      </div>
      <ChatDiv>
        <Chat wanted={wanted} />
        <Send wanted={wanted} />
      </ChatDiv>
       <div  >{filteredList}</div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GroupChatForm setWanted={setWanted} handleClose={handleClose} />
        </Modal.Body>
      </Modal>

      
 
       
      
    
      
     
    </FlexStyle>
  );
};

export default Group;
