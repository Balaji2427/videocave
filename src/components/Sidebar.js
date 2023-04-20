import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HistoryIcon from '@mui/icons-material/History';

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early Return if the menu is not open
    if(!isMenuOpen) return null;

    return (
        <div className="top-18 w-28 h-full fixed text-gray-900 bg-white">
            <ul className="flex flex-col">
                <li>
                    <a
                        className="side-bar-items flex flex-col items-center mt-8 py-3 px-2 hover:text-sky-400"
                        href="/"
                    >
                        <HomeIcon />
                        <span className="font-serif mt-2 text-sm font-bold">
                            <Link to="/">Home</Link>
                        </span>
                    </a>
                </li>
                <li>
                    <a  
                        aria-current="page"
                        className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-sky-400"
                        href="/explore"
                    >
                        <ExploreIcon />
                        <span className="font-serif mt-2 text-sm font-bold">Explore</span>
                    </a>
                </li>
                <li>
                    <a  
                        className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-sky-400"
                        href="/playlist"
                    >
                        <PlayCircleIcon />
                        <span className="font-serif mt-2 text-sm font-bold">Playlists</span>
                    </a>
                </li>
                <li>
                    <a  
                        className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-sky-400"
                        href="/liked"
                    >
                        <ThumbUpIcon />
                        <span className="font-serif mt-2 text-sm font-bold">Liked Videos</span>
                    </a>
                </li>
                <li>
                    <a  
                        className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-sky-400"
                        href="/watchlater"
                    >
                        <WatchLaterIcon />
                        <span className="font-serif mt-2 text-sm font-bold">Watch Later</span>
                    </a>
                </li>
                <li>
                    <a  
                        className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-sky-400"
                        href="/history"
                    >
                        <HistoryIcon />
                        <span className="font-serif mt-2 text-sm font-bold">History</span>
                    </a>
                </li>
            </ul>
            
        </div>
    )
};

export default Sidebar;