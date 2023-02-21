import { useContext } from "react";
import { AppContext } from "../../App";
import { HeaderContainer, HeaderSec } from "./styles"

export const Header  = () => {
  const context = useContext(AppContext);

  return(
    <HeaderContainer>
      <HeaderSec>
        <h1>  
          Dio Bank
        </h1>
      </HeaderSec>
    </HeaderContainer>
  )
}
