import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
let getUsers =[
  {id:1, email:'success@gmail.com', first_name:'tester', last_name:'testerenko', avatar:'https://i.kym-cdn.com/entries/icons/original/000/033/105/person.jpg' },
  {id:2, email:'denis@gmail.com', first_name:'denis', last_name:'maximenko', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWJrkS_8N2SviUYyNg4WXTzca8dXqwz_7gCSt0bvwg1IBYqzODKrpW09Obio5N-8K0M8&usqp=CAU ' },
  {id:3, email:'maxim@gmail.com', first_name:'maxim', last_name:'moxenko', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhq5cqi3Md6gwszQ_EKMsTdmsmugZC7VIsA&usqp=CAU' },
  {id:4, email:'anna@gmail.com', first_name:'anna', last_name:'andreenko', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjqSqlaBsUpb6hAgCxKRgzFhD1fI0ozgvDQ&usqp=CAU' },
  {id:5, email:'oleh@gmail.com', first_name:'oleh', last_name:'kalashnyk', avatar:'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg' },
  {id:6, email:'svatoslav@gmail.com', first_name:'svatoslav', last_name:'petrenko', avatar:'https://pbs.twimg.com/media/Ee-GRSuXkAA-3Er.jpg' }
]
function App() {
  const [users, setUsers] = useState([]);
  const [invite, setInvite] = useState([]);
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setUsers(getUsers)
  }, []);

  const onChangeSetValue = (e) => {
    setValue(e.target.value);
  };
  const onInvite = (id) => {
    if (invite.includes(id)) {
      setInvite((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvite((prev) => [...prev, id]);
    }
  };
  const onClickSuccess = (id) => {
    setSuccess(true)
  };
  return (
    <div className="App">
      {success ? (
        <Success count={invite.length}/>
      ) : (
        <Users
        onClickSuccess={onClickSuccess}
          onInvite={onInvite}
          invite={invite}
          value={value}
          setValue={onChangeSetValue}
          items={users}
        />
      )}
    </div>
  );
}

export default App;
