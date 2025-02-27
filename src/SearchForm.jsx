import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) =>{
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    console.log(searchValue)
    if(!searchValue){
      return 
    }
    setSearchTerm(searchValue)

  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
