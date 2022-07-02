import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import {
    RiHomeSmile2Line, RiHomeSmile2Fill,
    RiBriefcase4Line, RiBriefcase4Fill,
    RiChatSettingsLine, RiChatSettingsFill,
    RiShieldCheckLine, RiShieldCheckFill,
    RiCloseFill, RiMoreFill
} from 'react-icons/ri'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

const BottomNav = props => {
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props?.link)

    const moreRef = useRef(null)
    const [showMore, setShowMore] = useState(false)

    const onMoreClick = () => {
        setShowMore(!showMore)
        setActiveTabs('/more')
    }

    useEffect(() => {
        console.log(activeTabs);

        switch (activeTabs) {
            case '/':
                // router.push('/')
                break;
            case '/our-products':
                // router.push('/our-products')
                break;
            case '/our-services':
                // router.push('/our-services')
                break;
            case '/our-projects':
                // router.push('/our-projects')
                break;
        }
    }, [activeTabs]);

    return (
        <Box className="bottomNav-me">
            <div className="bnTab-me" onClick={() => setActiveTabs('/')}>
                {
                    activeTabs === '/' ?
                        <div className="bnTabWarper-me">
                            <RiHomeSmile2Fill
                                size='25'
                                color='#8e6144'
                            />
                            <div className='bnTabTitle-me' style={{ color: '#8e6144' }}>Home</div>
                        </div> :
                        <div className="bnTabWarper-me">
                            <RiHomeSmile2Line
                                size='25'
                                color='#000'
                            />
                            <div className='bnTabTitle-me'>Home</div>
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/our-products')}>
                {
                    activeTabs === '/our-products' ?
                        <div className="bnTabWarper-me">
                            <RiBriefcase4Fill
                                size='25'
                                color='#8e6144'
                            />
                            <div className='bnTabTitle-me' style={{ color: '#8e6144' }}>Products</div>
                        </div> :
                        <div className="bnTabWarper-me">
                            <RiBriefcase4Line
                                size='25'
                                color='#000'
                            />
                            <div className='bnTabTitle-me'>Products</div>
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/our-services')}>
                {
                    activeTabs === '/our-services' ?
                        <div className="bnTabWarper-me">
                            <RiChatSettingsFill
                                size='25'
                                color='#8e6144'
                            />
                            <div className='bnTabTitle-me' style={{ color: '#8e6144' }}>Services</div>
                        </div> :
                        <div className="bnTabWarper-me"
                        >
                            <RiChatSettingsLine
                                size='25'
                                color='#000'
                            />
                            <div className='bnTabTitle-me'>Services</div>
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/our-projects')}>
                {
                    activeTabs === '/our-projects' ?
                        <div className="bnTabWarper-me"
                        >
                            <RiShieldCheckFill
                                size='25'
                                color='#8e6144'
                            />
                            <div className='bnTabTitle-me' style={{ color: '#8e6144' }}>Projects</div>
                        </div> :
                        <div className="bnTabWarper-me"
                        >
                            <RiShieldCheckLine
                                size='25'
                                color='#000'
                            />
                            <div className='bnTabTitle-me'>Projects</div>
                        </div>
                }
            </div>
        </Box>

    )
}

export default BottomNav