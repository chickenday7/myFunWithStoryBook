import React, {useState} from "react";
import s from './AccodrionStyle.module.scss'

type AccordionType = {
    id: string
    title: string
    items: { id: string, text: string }[]
}
type AccordionsType = {
    accordions: AccordionType[]
}
export const Accordions = (props: AccordionsType) => {
    return (
        <>
            {props.accordions.map(accordion => {
                return <Accordion {...accordion} key={accordion.id}


                />
            })}
        </>
    )
}


interface IAccordion extends IAccordionTitle, IAccordionBody {
    id:string
}


const Accordion = (props: IAccordion) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const changeCollapsed = () => {
      setCollapsed(!collapsed)
    }

    return (
        <div className={s.wrapper} key={props.id}>
            <AccordionTitle title={props.title}
                            changeCollapsed={changeCollapsed}
            />
            <AccordionBody items={props.items}
                           collapsed={collapsed}
            />
        </div>
    )
}


interface IAccordionTitle {
    title: string
    changeCollapsed?:()=>void
}
const AccordionTitle = (props: IAccordionTitle) => {
    const onChangeCollapsed = () => {
        props.changeCollapsed!()
    }
    return <h3 onClick={onChangeCollapsed} style={{cursor:'pointer',userSelect:'none'}}>{props.title}</h3>
}


interface IAccordionBody {
    items: { id: string, text: string }[]
    collapsed?: boolean
}
const AccordionBody = (props: IAccordionBody) => {
    return (
        <ul>
            {!props.collapsed && props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    )
}