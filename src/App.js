import './App.css';
import { useState, useEffect} from 'react';
import Items from './components/Items';

function App() {
  const API_KEY = `%2BefalOjB2%2F4P8zlVJ%2BVlLxjqN1PS6NrVpqtyI3G%2F9WERm2OZRIB57ocCGqM81E5hIUU6%2F2LYYVyEgMxVauj6Sw%3D%3D`;
  const API_URL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20230101&endde=20230131&pageNo=1&numOfRows=100&serviceKey=${API_KEY}&_type=json`;

  const [animals, setAnimals] = useState([]);

  const getAnimalData = () =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
      console.log(data.response.body.items.item);
      const items = data.response.body.items.item;
      setAnimals(items);
    })
  }

  useEffect(() => {
    getAnimalData()
  }, [])


  return (
    <div className="App">
      <h1><span>유</span><span>기</span><span>동</span><span>물</span><span>을</span> <span>지</span><span>켜</span><span>줘</span></h1>
      {/* {animals[0].age} */}
      <Items animals = {animals}/>
    </div>
  );
}

export default App;
