import React, { useEffect, useState } from 'react'
import { MENU_URL, PROXY_URL } from './constant'

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
      fetchData();
    })
    const fetchData =  async() => {
        const data = await fetch(PROXY_URL + MENU_URL + resId);
        const json = await data.json();
         setResInfo(json.data)
    }
  return resInfo;
}

export default useRestaurentMenu;
