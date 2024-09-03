import { Book, Bot, FileVideo2, Gamepad, MoveIcon, Tv, Video, WebhookIcon} from "lucide-react";

export const dataSideBar = [
    {
        id: 1,
        icon: <Gamepad />,
        label: 'Game',
        
    },
    {
        id: 2,
        icon: <Bot />,
        label: 'Anime',
        
    },
    {
        id: 3,
        icon: <FileVideo2 />,
        label: 'Movies',
        
    },
    {
        id: 4,
        icon: <Tv />,
        label: 'TV',
        
    },
    {
        id: 5,
        icon: <Video />,
        label: 'Video',
        
    },
    {
        id: 6,
        icon: <Book/>,
        label: 'Wikis',
        
    },
    
]

export const dataUser = [
    {
        id: 1,
        label: 'Iniciar sesión',
        href: '/login'
    },
    {
        id: 2,
        label: 'Registrarse',
        href: '/register'
    },
    {
        id: 3,
        label: 'home',
        href: '/'
    },

]