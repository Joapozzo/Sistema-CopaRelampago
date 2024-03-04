import React from 'react'
import {CardPartidoTitles, CardPartidoWrapper, CardPartidoTeams, CardPartidoTeam, CardPartidoInfo, CardPartidoStats, CardPartidoDivider, CardPartidoGoalsContainer, CardPartidoGoalsColumn } from "../CardPartido/CardPartidoStyles"
import EscudoCelta from '/Escudos/celta-de-vino.png'
import EscudoPuraQuimica from '/Escudos/pura-quimica.png'
import { HiLifebuoy } from "react-icons/hi2";

const CardFinalPartido = () => {
  return (
    <CardPartidoWrapper>
        <CardPartidoTitles>
            <h3>Serie A - Apertura 2024</h3>
            <p>Sabado 03/02 | Fecha 1 - Cancha 1</p>
        </CardPartidoTitles>
        <CardPartidoTeams>
            <CardPartidoTeam>
            <img src={EscudoCelta} />
                    <h4>
                        Celta de Vino
                    </h4>
            </CardPartidoTeam>
            <CardPartidoInfo>
                <h4>4-2</h4>
                <span>Final</span>
            </CardPartidoInfo>
            <CardPartidoTeam>
                    <img src={EscudoPuraQuimica} />
                    <h4>
                        Pura Química
                    </h4>
            </CardPartidoTeam>
        </CardPartidoTeams>
        <CardPartidoDivider/>
        <CardPartidoGoalsContainer>

            <CardPartidoGoalsColumn>
                <h5>POZZO, Joaquin</h5>
                <h5>PEREZ, Mariano</h5>
                <h5>HELMAN, Ramiro</h5>
                <h5>MESSI, Lionel</h5>
            </CardPartidoGoalsColumn>

            <CardPartidoGoalsColumn>
                <HiLifebuoy/>
            </CardPartidoGoalsColumn>

            <CardPartidoGoalsColumn className='visit'>
                <h5>POZZO, Joaquin</h5>
                <h5>PEREZ, Mariano</h5>
            </CardPartidoGoalsColumn>

        </CardPartidoGoalsContainer>
    </CardPartidoWrapper>
  )
}

export default CardFinalPartido