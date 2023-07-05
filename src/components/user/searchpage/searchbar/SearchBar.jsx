import React,{useState} from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const SearchBar = ({placeholder,data}) =>{
    const [filteredData,setFilteredData] = useState([]);
    const [wordEntered,setWordEntered] = useState("");
    const handleFilter = (event)=>{
        const searchWord =  event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord ===""){
            setFilteredData([]);
        }
        else{
        setFilteredData(newFilter);
        }
    }
    const clearInput = () =>{
      setFilteredData([]);
      setWordEntered("");   
    }
    return  (
        <div>
        <div className="SearchInputs">
           <div className="InputBox">
              <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/> 
              <div className="Searchicon">
                {filteredData.length===0 ? <SearchIcon/> : <CloseIcon id='clearBtn' onClick={clearInput}/>}
                
              </div>
           </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataresult">
        {filteredData.slice(0,15).map((value,key)=>{
            return (
            <a  className="dataItem"   href={value.link} >
              <p>{value.title}</p>
            </a>
            )
        })}
        </div>
        )}
   </div>
    )
    
}

export default SearchBar;