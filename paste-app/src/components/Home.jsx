import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import Paste from './Paste';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParam, setSearchParam] = useSearchParams();
    const pasteId = searchParam.get('pasteId');
    const dispatch = useDispatch();
    const pastes= useSelector((state)=> state.paste.pastes)


   
    

    const createPaste = ()=>
    {
        const paste = {
            title : title,
            content: value,
            _id : pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2), 
            createdAt : new Date().toISOString(),
        }


        if(pasteId)
        {
            //update
            dispatch(updateToPastes(paste));
        }
        else
        {
            // create
            dispatch(addToPastes(paste));
        }

        // after the creation or update 
        setTitle("");
        setValue("");
        setSearchParam("");
    };

    const resetPaste = () => {
        setTitle("");
        setValue("");
        setSearchParam({});
        // navigate("/");
      };

    useEffect(() => {
        if(pasteId)
        {
            const paste = pastes.find((p) => p._id === pasteId);
         if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
        }
      
    }, [pasteId, pastes])

  return (
  <div>
      <div className='pt-4 flex flex-row gap-6 place-content-between'>
        <input type="text" 
    className="p-2 rounded-xl flex pl-3 mt-2 w-[65%]" 
         placeholder='Enter text here...'
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
         />
         <button onClick={createPaste}>
            {
                pasteId? "UPdate Paste" : "Create my Paste"
            }
         </button>
    </div>
   
    <div>
        <textarea className='rounded-2xl p-5 mt-5  h-96 min-w-[599px]'
            value={value}
            placeholder='Enter contents here...'
            onChange={(e)=> setValue(e.target.value)}
        />
        
    </div>
  </div>
  )
}

export default Home