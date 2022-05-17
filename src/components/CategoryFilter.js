import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {
  const handleCategory= (category)=>{
    handleSelectedCategory(category)
  }
 const categoriesButtons = categories.map(category => (
   <button key={category} className={category === selectedCategory ? "selected": null}onClick={()=>handleCategory(category)}>{category}</button>
 ))
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { categoriesButtons}
    </div>
  );
}

export default CategoryFilter;