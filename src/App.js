import { useState,useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeBtn= (id) => {
    const newToures = tours.filter((tour) => id !== tour.id);
    setTours(newToures);
   
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const responce = await fetch(url);
      const tours = await responce.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    }
    catch(error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTours()
  },[]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return(
      <main className="non_main">
        <h3>List None</h3>
        <button className="delete_btn" onClick={() => fetchTours()}>Bring back</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours ={tours} removeBtn = {removeBtn}/>
    </main>
  )
  
}

export default App;
