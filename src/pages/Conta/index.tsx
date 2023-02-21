import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../api';
import { CardInfo, InfoItem, Loading, TextHighlight } from './style'
import { useParams, useNavigate } from "react-router-dom"
import { AppContext } from '../../App';

interface IUserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: "string"
}

export default function Conta() {
  
  const context = useContext(AppContext);
  const [userData, setUserData] = useState<null | IUserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data: any = await api;
      setUserData(data);
    }

    getData();

  }, [])

  const date = new Date();

  const formattedDate = date.toLocaleString("pt-Br", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });

  if(userData && userData.id !== id) navigate('/');

  return (
    <>
      {userData
        ? <CardInfo>

          <h1>Olá, <TextHighlight>{userData?.name}</TextHighlight>!</h1>
          <InfoItem>Data: <TextHighlight>{formattedDate}</TextHighlight></InfoItem>
          <InfoItem>Saldo:  <TextHighlight>R$ {userData?.balance}</TextHighlight></InfoItem>

        </CardInfo>
        : <Loading />
      }
    </>
  )
}
