import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);

    // redux state variables for cached search results and dispatch function
    const cachedSearchResults = useSelector(
        (store) => store.search.cachedResults
    );

    const dispatch = useDispatch();
    
    // This function dispatches an action to toggle the menu state
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }


    // effect hook to get search suggestions when searchQuery state changes
    useEffect(() => {
        // timer to delay search suggestions fetching
        const timer = setTimeout(() => {
            //Check if cached search results exist for current search query
            if(cachedSearchResults[searchQuery]) {
                //use cached search results if available
                setSearchResult(cachedSearchResults[searchQuery]);
            } else {
                // fetch search suggestions from API and cache results
                getSearchSuggestions();
            }
        }, 100);

        // clear timer if component unmounts or searchQuery state changes
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);


    // This function fetches new search suggestions using the YouTube
    // Data API and sets the searchResult state to the suggestions.
    // It also caches the search results for future use.
    const getSearchSuggestions = async () => {
        const data = await fetch(SEARCH_API + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        setSearchResult(json[1]);

        dispatch(cacheResults({[searchQuery]: json[1]}));
    };


    // This function updates searchQuery state with the selected suggestion
    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
    }

    return (
        <div className="flex justify-between items-center p-3 sticky top-0 z-50 bg-white">
            <div className="flex">
                <span
                    className="mt-4 cursor-pointer"
                    onClick={() => toggleMenuHandler()}
                >
                    <MenuIcon />
                </span>

                <img 
                    className="h-14 ml-2"
                    src="https://img.squadhelp.com/story_images/visual_images/1638860844-VideoCave-01.jpg?class=show"
                    alt="Logo"
                />
            </div>

            {/* Search input */}
            <div className="flex items-center w-[30rem] relative">
                <Link
                    to={`results?search_query=${
                        searchQuery.length ? searchQuery : "most+popular"
                    }`}
                >
                    <div className="flex items-center w-[30rem] relative">
                        <input 
                            className="w-full border border-gray-400 rounded-l-full p-2"
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocus(true)}
                            onBlur={() => 
                                setTimeout(() => {
                                    setIsSearchFocus(false)
                                }, 100)
                            }
                        />{" "}
                        <button className="border border-gray-400 hover:bg-slate-400 bg-slate-300 rounded-r-full p-2 w-12">
                            <SearchIcon />
                        </button>
                    </div>
                </Link>
                {searchResult.length!==0 && isSearchFocus && (
                    <div className="w-[90%] absolute top-11">
                        <ul className="ml-3 p-2 shadow-lg shadow-neutral-500 rounded-lg bg-white">
                            {searchResult.map((e) => {
                                return (
                                    <Link to={`results?search_query=${e}`} key={e}>
                                        <li
                                            onClick={() => handleSuggestionClick(e)}
                                            className="p-1 hover:bg-gray-100 cursor-pointer rounded-md"
                                        >
                                            <SearchIcon /> {e}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>

            {/* User */}
            <div className="flex items-center mr-4">
                <AccountCircleIcon />
            </div>
        </div>
    )
};

export default Header;