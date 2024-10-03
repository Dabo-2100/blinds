import React from 'react'
import { useRecoilState } from 'recoil'
import { counter } from './Store'

export default function Test() {
    const [hamada, setHamada] = useRecoilState(counter)
    return (
        <div>Counter is : {hamada}</div>
    )
}
