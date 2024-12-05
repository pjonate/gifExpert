import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifCrid } from './components/GifCrid';

export const GifExpertApp = ({list}) => {

    const [categories, setCategories] =  useState(list);

    const onAddCategory = (newCategory)=>{
      if(categories.includes(newCategory)) return;
      setCategories([...categories, newCategory]);
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={event=>onAddCategory(event)}
        />
        
        {
          categories.map(category =>(
            <GifCrid 
              key = {category}
              category={category}
            />
          ))
        }
    </>
  )
}
