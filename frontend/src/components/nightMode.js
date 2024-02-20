import { BsMoon } from "react-icons/bs";

const toggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function NightMode() {
  return (
    <>
      <button onClick={toggle}>
        <BsMoon />
      </button>
    </>
  );
}
