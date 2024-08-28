import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import './App.css'

const App = () => {
  
  const listPerson = [
    {
      id: 0,
      name: 'John Lemuel Encina',
      course: 'Information'
    },
    {
      id: 1,
      name: 'Angelo Muyano',
      course: 'Information'
    },
    {
      id: 2,
      name: 'Clarence Mayor',
      course: 'Information'
    },
    {
      id: 3,
      name: 'Yesha Elacion',
      course: 'Information'
    },
    {
      id: 4,
      name: 'Aera Casey Campos',
      course: 'Information'
    },
    {
      id: 5,
      name: 'Jherome Mortil',
      course: 'fish'
    },
    {
      id: 6,
      name: 'Kerr Marty',
      course: 'fish'
    },
    {
      id: 7,
      name: 'Menard Menor',
      course: 'fish'
    },
    {
      id: 8,
      name: 'Athena Alop',
      course: 'fish'
    },
    {
      id: 9,
      name: 'Jason Servilla',
      course: 'fish'
    },
  ]

    const [students, setStudents] = useState([...listPerson])
    const [filterStudents, setFilterStudents] = useState([...students])
    const inputRef = useRef()
    const [search, setSearch] = useState('')
    const [inputed, setInputed] = useState(false)

    const handleFilter = () => {
      const inputValue = inputRef.current.value.toLowerCase().trim();
    
      if (inputValue === '') {
        setInputed(false);
        return;
      }
    
      const updatedList = listPerson.filter((item) =>
        item.course.toLowerCase().includes(inputValue)
      );
    
      setFilterStudents(updatedList);
      setSearch(inputValue);
      setInputed(true);
    };
    

    useEffect(() => {
      inputRef.current.focus()
    }, [])


  return (
    <div className="wrapper-list">
      <h4>Search Filter Exercise</h4>
      <p>In these exercise, you can search information technology , fisheries, and the word all to determine all the students enrolled for the semester.</p>
      <p> fish / information (searchable items)</p>
      <input type="text" ref={inputRef} placeholder="Enter Course.." className="form-control" onChange={handleFilter} />
      <button className="btn btn-primary" onClick={handleFilter}>Search</button>
        { inputed === false ? <p style={{color: 'red'}}>Please Input the field.</p> : null }
        {inputRef && filterStudents.map((item) => (
         <div key={item.id} className="list-items">
            <li><h4>{item.name}</h4></li>
         </div>
        ))}

    </div>
  )
}

export default App