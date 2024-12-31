import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeFromPastes(id));
      };
    

   // Filter pastes based on search term (by title or content)
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div >
        <input type="text" 
        className = "p-4  rounded-2xl flex pl-3 mt-5 min-w-[600px]"
        placeholder='Search here'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />

        <div className='flex flex-col gap-5 mt-9'>
            {
                filteredData.length > 0 && 
                filteredData.map(
                    pastes =>{
                        return <div className='border rounded-lg' key={pastes?._id}>
                           <div>
                           {pastes.title}
                           </div>
                           
                           <div>
                            {pastes.content}
                           </div>

                           <div className='flex flex-row fap-4 place-content-evenly'>
                           <button ><a href={`/?pastes=${pastes?._id}`}>Edit</a> </button>
                           <button > <a href={`/pastes/${Paste?._id}`}>View</a> </button>
                           <button onClick={() => handleDelete(Paste?._id)}>Delete</button>
                          
                           <button onClick={()=>{navigator.clipboard.writeText(pastes?.content) 
                            toast.success("Copied to clipboard")}}>Copy</button>
                          
                           <button onClick={handleShare}>Share</button>
                           </div>

                           <div>
                            {pastes.createdAt}
                           </div>
                       
                        </div>
                    }
                )
            }

        </div>

    </div>
  )
}

export default Paste