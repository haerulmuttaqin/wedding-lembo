import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import {
    RiHomeSmile2Line, RiHomeSmile2Fill,
    RiBriefcase4Line, RiBriefcase4Fill,
    RiChatSettingsLine, RiChatSettingsFill,
    RiShieldCheckLine, RiShieldCheckFill,
    RiCloseFill, RiMoreFill, RiUserHeartFill, RiUserHeartLine, RiCalendarEventLine, RiCalendarEventFill, RiMapPin2Fill, RiMapPin2Line
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
                router.push('#')
                break;
            case '/mempelai':
                router.push('#mempelai')
                break;
            case '/countdown':
                router.push('#countdown')
                break;
            case '/informasi_acara':
                router.push('#informasi_acara')
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
                        </div> :
                        <div className="bnTabWarper-me">
                            <RiHomeSmile2Line
                                size='25'
                                color='#000'
                            />
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/mempelai')}>
                {
                    activeTabs === '/mempelai' ?
                        <div className="bnTabWarper-me">
                            <RiUserHeartFill
                                size='25'
                                color='#8e6144'
                            />
                        </div> :
                        <div className="bnTabWarper-me">
                            <RiUserHeartLine
                                size='25'
                                color='#000'
                            />
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/countdown')}>
                {
                    activeTabs === '/countdown' ?
                        <div className="bnTabWarper-me">
                            <RiCalendarEventFill
                                size='25'
                                color='#8e6144'
                            />
                        </div> :
                        <div className="bnTabWarper-me"
                        >
                            <RiCalendarEventLine
                                size='25'
                                color='#000'
                            />
                        </div>
                }
            </div>
            <div className="bnTab-me"
                onClick={() => setActiveTabs('/informasi_acara')}>
                {
                    activeTabs === '/informasi_acara' ?
                        <div className="bnTabWarper-me"
                        >
                            <RiMapPin2Fill
                                size='25'
                                color='#8e6144'
                            />
                        </div> :
                        <div className="bnTabWarper-me"
                        >
                            <RiMapPin2Line
                                size='25'
                                color='#000'
                            />
                        </div>
                }
            </div>
        </Box>

    )
}

export default BottomNav