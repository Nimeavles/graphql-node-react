import { Portal, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthModal from "../layout/AuthModal";

type Props = {
  height?: string;
  flexDirection?: any;
  fontSize?: string;
  alignItems?: string;
}

export const NavItems: FC<Props> = ({ height = 'auto', flexDirection = 'row', fontSize = "auto", alignItems = "" }) => {
  const [portal, setPortal] = useState(false);

  return (
    <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems, width: '100%', flexDirection, height, fontSize }}>
      <NavLink to={'/'}>
        <b>Inicio</b>
      </NavLink>
      <Text onClick={() => setPortal(true)} bg="none" _hover={{ cursor: 'pointer' }}>
        Acceder
        {
          portal && (
            <Portal>
              <AuthModal setOpen={setPortal} />
            </Portal>
          )
        }
      </Text>
      <NavLink to={'/'}>
        <b>MartketPlace</b>
      </NavLink>
    </ul>
  )
};