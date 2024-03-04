import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionOptionContainer, ActionTitle, ActionsContainer } from './ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";

import { setActionPlayer, setNavigationSource, setPlayerSelectedAction, toggleHiddenAction } from '../../../redux/Planillero/planilleroSlice';
import { toggleHiddenTime, toggleHiddenAsist } from '../../../redux/Planillero/planilleroSlice';

const ActionConfirmed = () => {
    const dispatch = useDispatch();
    const hiddenActions = useSelector((state) => state.planillero.planilla.hidden);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const player = useSelector((state) => state.match.player && state.match.player.ID);


    //Seleccionar jugador mediante click en edit
    const [selectedPlayerId, setSelectedPlayerId] = useState(''); 

    //Avisar que selecciono el planillero
    const handleNext = () => {
        switch (selectedOption) {
            case "Gol":
                dispatch(setNavigationSource('Assisted'));
                dispatch(toggleHiddenAsist());
                dispatch(setActionPlayer("Gol"))
                break;
            case "Amarilla":
                dispatch(setNavigationSource('Amarilla'));
                dispatch(toggleHiddenTime());
                dispatch(setActionPlayer("Amarilla"))
                break;
            case "Roja":
                dispatch(setNavigationSource('Roja'));
                dispatch(toggleHiddenTime());
                dispatch(setActionPlayer("Roja"))
                break;
            default:
                break;
        }

        dispatch(toggleHiddenAction());
    };
    
    return (
        <>
        {!hiddenActions && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack>
                        <HiArrowLeft onClick={() => dispatch(toggleHiddenAction())}/>
                        <p>Volver</p>
                    </ActionBack>
                    <ActionTitle>
                        <h3>Seleccione una acción</h3> 
                        <AlignmentDivider/>
                    </ActionTitle>

                    <ActionsContainer>
                        <ActionOptionContainer>
                        <input 
                            type="radio" 
                            name="actionOption"
                            id="golOption"
                            value="Gol"
                            onChange={() => handleOptionChange("Gol")}
                            checked={selectedOption === "Gol"}
                        />
                            <p>Gol</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input 
                                type="radio" 
                                name="actionOption"
                                id="amarillaOption"
                                value="Amarilla"
                                onChange={() => handleOptionChange("Amarilla")}
                                checked={selectedOption === "Amarilla"}
                            />
                            <p>Amarilla</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input 
                                type="radio" 
                                name="actionOption"
                                id="rojaOption"
                                value="Roja"
                                onChange={() => handleOptionChange("Roja")}
                                checked={selectedOption === "Roja"}
                            />
                            <p>Roja</p>
                        </ActionOptionContainer>
                    </ActionsContainer>
                    <ActionNext 
                        onClick={handleNext}
                        disabled={!selectedOption}
                        className={selectedOption ? '' : 'disabled'}
                    >
                        Siguiente
                    </ActionNext>
                </ActionConfirmedWrapper>
            </ActionConfirmedContainer> 
        )}
        </>
    );
}

export default ActionConfirmed;
