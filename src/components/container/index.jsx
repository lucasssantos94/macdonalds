import PropTypes from 'prop-types'

import BoxContainer from "./container_style"

export default function Container({ children }) {
    return (
        <BoxContainer>
            {children}
        </BoxContainer>
    )
}

Container.propTypes = {
    children: PropTypes.node
}