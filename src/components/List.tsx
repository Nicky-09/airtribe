// import React, { useState } from 'react'
import React, { useState, useRef } from 'react';
// import './App.css';


const List = () => {


    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
   
    const dragStart = (e:any, position:any) => {
      dragItem.current = position;
    //   console.log(e.target.innerHTML);
    };
   
    const dragEnter = (e:any, position:any) => {
      dragOverItem.current = position;
    //   console.log(e.target.innerHTML);
    };
   
    const drop = (e:any) => {
      const copyListItems = [...list];
      console.log(copyListItems);
      console.log(dragItem.current);
      if(dragItem.current)
      {
      const dragItemContent = copyListItems[dragItem.current];
    //   console.log(dragItemContent);
    //   copyListItems.splice(dragItem.current, 1);
    //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    //   dragItem.current = null;
    //   dragOverItem.current = null;
      setList(copyListItems);
    };
   
    return (
      <>
      {
      list &&
      list.map((item, index) => (
        <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          key={index}
          draggable>
            {item}
        </div>
        ))}
      </>
    );
  };

}

export default List;