import HomeIcon from '@material-ui/icons/Home';
import MouseIcon from '@material-ui/icons/Mouse';
import StarIcon from '@material-ui/icons/Star';
import WebIcon from '@material-ui/icons/Web';
import ListIcon from '@material-ui/icons/List';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData=[
    {
        title :"Dashboard",
        icon : <HomeIcon/> ,
        link :"/dashboard"
    },
    {
        title :"Website",
        icon : <WebIcon/> ,
        link :"/website"
    },
    {
        title :"Visitors",
        icon : <MouseIcon/> ,
        link :"/visitors"
    },
    {
        title :"Reviews",
        icon : <StarIcon/> ,
        link :"/reviews"
    },
    {
        title :"Listings",
        icon : <ListIcon/> ,
        link :"/listings"
    },
    {
        title :"Appoinments",
        icon : <DateRangeIcon/> ,
        link :"/appoinments"
    },
    {
        title :"Settings",
        icon : <SettingsIcon/> ,
        link :"/settings"
    },
]