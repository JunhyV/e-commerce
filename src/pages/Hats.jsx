import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterBar from '../components/forCategories/FilterBar';
import Products from '../components/forCategories/Products';
import { changeData } from '../utils/changeFilterData';

const Hats = () => {
  const store = useSelector(state => state.store.onStore);
  const [hats, setHats] = useState([])

  useEffect(() => {
    const filterData = store.filter(product => product.title === 'Hats');
    setHats(filterData); 
  }, [])

  
  let changeData = (value, type) => {
    let filter = store.filter(product => product.price <= value);
    let filterProducts = filter.filter(product => product.title === type);
    setHats(filterProducts)
  }

  let orderByCheapest= (type) => {
    const filter = store.filter(product => product.title === type);
    const order = filter.sort((a, b)=> a.price - b.price)
    setHats(order);
  }
  let orderByExpensive= (type) => {
    const filter = store.filter(product => product.title === type);
    const order = filter.reverse((a, b)=> a.price - b.price)
    console.log(order);
    setHats(order);
  }
  let orderDefault= (type) => {
    const filter = store.filter(product => product.title === type);
    setHats(filter);
  }


  return (
    <div >
      <select name="orderByPrice" onChange={(e)=>{
        if (e.target.value === 'Cheapest') {
          orderByCheapest('Hats');
        }
        if (e.target.value === 'Expensive') {
          orderByExpensive('Hats');
        }
        if (e.target.value === 'Default') {
          orderDefault('Hats');
        }
        }}>
        <option value="Default">Default</option>
        <option value="Cheapest">Cheapest</option>
        <option value="Expensive">Expensive</option>
      </select>
      <FilterBar changeData={changeData} min={14} max={36} type='Hats'/>
      <Products data={hats}/>
    </div>
  )
}

export default Hats