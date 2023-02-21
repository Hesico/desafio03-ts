import {
  BoxContainer,
  Input
} from "./style"

import { login } from '../../services/login';
import Button from "../Button";
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  return(
    <BoxContainer>
        <h1>Faça o login</h1>
      <Input placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <Input placeholder="password" type="password" value={password} onChange={(event) => setpassword(event.target.value)}/>
      <Button onClickEvent={() => login(email)} text={"login"} />
    </BoxContainer>
  )
}