// function Props(props) {
// function Props({user}) {
function DefaultProps({ users = "Vaishali" }) {
  return (
    <div>
      <hr />
      <h1>DefaultProps Place here </h1>
      {users}
    </div>
  );
}

export default DefaultProps;
