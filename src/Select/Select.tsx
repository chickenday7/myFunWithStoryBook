import React, {useState} from "react";
import s from './SelectStyle.module.scss'
import {ItemOptions} from "./ItemOptions";

type SelectPropsType = {
    options: any[]
    value?: {id:number,title:string}
    changeValue:(id:number)=>void
}
export const Select = (props: SelectPropsType) => {
    const [collapsed, changeCollapsed] = useState<boolean>(false)

    const changeSelected = (id: number) => {
        changeCollapsed(false)
        props.changeValue(id)
    }

    const list = props.options.map(item => <ItemOptions {...item}
                                                        value={props.value}
                                                        changeSelected={changeSelected}
                                                        key={item.id}
    />)
    return (
        <div onMouseLeave={() => {changeCollapsed(false)}
        }>
            <div className={s.selectedOption} onClick={() => {
                changeCollapsed(true)
            }}>
                <h3 className={s.title}>
                    {props.value ? props.value.title : ''}
                </h3>
                <div className={s.arrow}>
                    {'↓'}
                </div>
            </div>
            {collapsed &&
                <div className={s.availableOptions}>
                    {list}
                </div>
            }

        </div>
    )
}