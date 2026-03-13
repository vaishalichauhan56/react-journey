// function Props(props) {
function Props({user}) {
  return (
    <div>
      {/* {props.name} , {props.age} */}
      <hr/>
      {user.name} , {user.age}
      <h1>Props Place here </h1>
    </div>
  );
}

export default Props;
