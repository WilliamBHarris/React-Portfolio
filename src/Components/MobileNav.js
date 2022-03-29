import {CgMenuRight} from 'react-icons/cg'
import MobileNavLinks from "./MobileNavLinks";
import { useState } from 'react';
import {CgClose} from 'react-icons/cg'


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const hamIcon = <CgMenuRight className='hamMenu' size='40px' onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className='hamMenuClose' size='40px' onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false)

    return (
        <div className='smallNav'>
        {open && <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        {open ? closeIcon : hamIcon}
        </div>
    )
}

export default MobileNav
