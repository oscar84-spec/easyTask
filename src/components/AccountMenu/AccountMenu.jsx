import { styledAccountMenu } from "../../assets/styledComponents/AccountMenu/StyledAccountMenu";

const AccountMenu = ({ item }) => {
  const { ListMenu } = styledAccountMenu;
  const { icon, text } = item;
  return (
    <ListMenu>
      {icon} {text}
    </ListMenu>
  );
};

export default AccountMenu;
