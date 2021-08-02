//styling//components

//
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ChatDiv, FlexStyle, GroupDiv } from "../../styles";
import Chat from "../Chat";
import GCard from "../HCard/GCard";
import Send from "../Send";
import Group1 from "../../images/Group1.png";
import Group2 from "../../images/Group2.png";
import Group3 from "../../images/Group3.png";
import group4 from "../../images/group4.png";

const Group = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);

  const groups = useSelector((state) => state.groups.groups);
  const loading = useSelector((state) => state.groups.loading);

  const [wanted, setWanted] = useState(null);

  if (!_user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  const filteredList = groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.id === _user.id) keep = true;
      });
      return keep;
    })
    .map((group) => (
      <div onClick={() => setWanted(group)}>
        <GCard group={group} _user={_user} />
      </div>
    ));

  return (
    <FlexStyle>
     
      
      <div className="b18">
        <div className="b19"></div>
       <div className="b22"></div>
       <img className="b23" src="https://image.flaticon.com/icons/png/128/5247/5247759.png"/>
       <img className="b24" src="https://image.flaticon.com/icons/png/128/747/747376.png"/>
       <img className="b25" src="https://image.flaticon.com/icons/png/128/1370/1370907.png"/>
       <img className="b26" src="https://image.flaticon.com/icons/png/128/1234/1234127.png"/>
       <img className="b27" src="https://image.flaticon.com/icons/png/128/4812/4812717.png"/>
       <img className="b28" src="https://image.flaticon.com/icons/png/128/2928/2928989.png"/>
       <img className="b29" src="https://image.flaticon.com/icons/png/128/503/503819.png"/>
       <img className="b30" src="https://image.flaticon.com/icons/png/128/2370/2370264.png"/>
       <div className="a1"></div>
       <img className="p1" src={Group1} alt={"pic1"} />
       <div className="p2"></div>
       <div className="p3">Search for a friend</div>
       <img className="p4" src={Group2}/>
       <div className="l1"></div>
       <img className="l2" src={Group3}/>
       <div className="l3"></div>
       <div className="l8"></div>
       <img className="l10" src={group4}/>
       <div className="l11">Yousef Laban</div>
       <div className="l12">Available</div>
      

       
      </div>
      <ChatDiv >
        <Chat  wanted={wanted} />
        <Send wanted={wanted} />
      </ChatDiv>
      
      <GroupDiv>{filteredList}</GroupDiv>
    
      
     
    </FlexStyle>
  );
};

export default Group;
