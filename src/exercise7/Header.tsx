import ChangeUserButton from "./ChangeUserButton";
import { useUser } from "./UserContext";

const Header = () => {
  const { data } = useUser();

  if (!data) return null;
  return (
    <div>
      <ChangeUserButton />
      <h1>{data.nome}</h1>
    </div>
  );
};

export default Header;
