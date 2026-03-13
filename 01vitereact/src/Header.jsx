function Header() {
  return (
    <div>
      <h1>Header Place here </h1>
    </div>
  );
}
export function Profile() {
  return (
    <div>
      <h1>Profile Place here {keyV}</h1>
    </div>
  );
}
export function Setting() {
  return (
    <div>
      <h1>Setting Place here </h1>
    </div>
  );
}
export function Operations() {
  return (
    <div>
      <h2>{6+7}</h2>
      <h2>{3*5}</h2>
      <button onClick={() => alert("Vaishali")}>Onclick</button>
    </div>
  );
}

export const keyV = "dvvfv53#@!%$^&*"

export default Header;
