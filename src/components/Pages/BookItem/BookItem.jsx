import React from 'react';

const BookItem = ({bookItem,handleRemove,handleUpdate}) => {
    // console.log(bookItem)
    const {img,name,date,price,_id,status} = bookItem

    

    return (
      
      <tr>
        <th>
        <button onClick={()=>handleRemove(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 ">
                <img  src={img?img:''} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name?name:'display none'}</div>
              <div className="text-sm opacity-50">color:green</div>
              <div className="text-sm opacity-50">Size:S</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          
        </td>
        <td>{date?date:'date'}</td>
        <th>
         { status?<span className='text-lg font-bold'>Updated</span>:<button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Update</button>}
        </th>
      </tr>
     
    
     
    
        
    );
};

export default BookItem;