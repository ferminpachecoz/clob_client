import React from 'react';
import './Header.css'
import { useEffect, useState } from 'react';

export default function Header() {
  const [category, setCategory] = useState([])
  const [admin, setAdmin] = useState();
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(false);
  const [query, setQuery] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/category')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(err => console.error(err))

    setAdmin(sessionStorage.getItem("admin"))
  },[])
  const displayInput = () =>{
    setSearch(!search);
  }
  const displayMenu = () =>{
    setMenu(!menu);
  }
  const handleSearch = str =>{
    fetch(`http://localhost:3001/search?query=${str}`)
      .then(res => res.json())
      .then(data => setQuery(data))
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div className='nav-container'>
        <a href="/"><div className='logo-sm'></div></a>
        <ul className='nav-left'>
          <li><a href="/">Home</a></li>
          <li className='ul-container'>
            <div>Categorias</div>
            <ul className='category-container'>
              {
                category.map((item, i)=>
                  <li key={i}><a href={`/categoria?id_category=${item.id}`}>{item.title}</a></li>
                )
              }
            </ul>
          </li>
          <li><a href="#">Colecciones</a></li>
          {admin &&
            <li><a href="/admin">Admin</a></li>
          }
        </ul>
        {search &&
          <div className='search-container'>
            <input type="text" className='search-bar' placeholder='Buscar producto...' onChange={e => handleSearch(e.target.value)} />
            <div className='query-results'>
              <ul>
                {
                  query.map((item, i)=>
                    <li key={i} className="my-1">
                      <a href={`/producto/${item.id}?id=${item.id}`}>
                        {item.name}
                      </a>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        }
        <ul className='nav-right'>
          <li className='search-bar'>
            <div>
              <input type="text" className='search-bar' placeholder='Buscar producto...' onChange={e => handleSearch(e.target.value)} />
              <div className='query-results'>
                <ul>
                  {
                    query.map((item, i)=>
                      <li key={i} className="my-1">
                        <a href={`/producto/${item.id}?id=${item.id}`}>
                          {item.name}
                        </a>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </li>
          <li><a href="/contacto">Contacto</a></li>
          {!admin &&
            <li><a href="/login">Login</a></li>
          }
        </ul>
        <div className='burger-menu'>
          <div className='icons-container'>
            <i className="bi bi-search me-2" onClick={displayInput}></i>
            <i className="bi bi-list" onClick={displayMenu}></i>
          </div>
        </div>
      </div>
      {menu &&
        <div className='xs-menu'>
          <div>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="#">
              <p>Colecciones</p>
            </a>
            <a href="#" onClick={() => setDisplayCategory(!displayCategory)}>
              <p>Categorias</p>
            </a>
            {displayCategory &&
              <div className='text-xs-container'>
                {
                  category.map((item, i)=>
                    <a href={`/categoria?id_category=${item.id}`} key={i}><p className="text-xs-menu" >{item.title}</p></a>
                  )
                }
              </div>
            }
            {admin &&
              <a href="/admin">
                <p>Admin</p>
              </a>
            }
            <a href="/contacto">
              <p>Contacto</p>
            </a>
            {!admin &&
              <a href="/login">
                <p>Login</p>
              </a>
            }
          </div>
        </div>
      }
    </div>
  )
}
