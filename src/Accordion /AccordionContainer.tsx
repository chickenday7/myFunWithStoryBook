import React, {useState} from "react";
import {Accordions} from "./Accordion";
import {v4 as uuidv4} from 'uuid'


export const AccordionContainer = () => {

    type AccordionType = {
        id: string
        title: string
        items: { id: string, text: string }[]
    }
    const arrayAccordions: AccordionType[] = [
        {
            id: uuidv4(),
            title: 'Menu',
            items: [
                {id: uuidv4(), text: '1'},
                {id: uuidv4(), text: '2'},
                {id: uuidv4(), text: '3'},
            ]
        },
        {
            id: uuidv4(),
            title: 'Users',
            items: [
                {id: uuidv4(), text: 'Pavel'},
                {id: uuidv4(), text: 'Yana'},
                {id: uuidv4(), text: 'Alexey'},
            ]
        }
    ]





    return <Accordions accordions={arrayAccordions}


    />
}