import React from 'react'
import InformationStep from './InformationStep'
import RoleStep from './RoleStep'
import VerificationStep from './VerificationStep'
import './on-board-page.scss'

const OnBoard = () => {
    return (
        <div className='on-board-page'>
            <InformationStep />
            {/* <RoleStep />
            <VerificationStep /> */}
        </div>
    )
}

export default OnBoard