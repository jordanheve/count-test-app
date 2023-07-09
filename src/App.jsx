import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.css";


function App() {
  const storedTotalCount = localStorage.getItem('totalCount');
  const storedNonTotalCount = localStorage.getItem('nonTotalCount');
  const [totalCount, setTotalCount] = useState(parseInt(storedTotalCount) || 0);
  const [nonTotalCount, setNonTotalCount] = useState(parseInt(storedNonTotalCount) || 0);

  useEffect(() => {
    localStorage.setItem('totalCount', totalCount.toString());
  }, [totalCount]);

  useEffect(() => {
    localStorage.setItem('nonTotalCount', nonTotalCount.toString());
  }, [nonTotalCount]);

  const handleIncrease = () => {
    setTotalCount(totalCount + 1);
    setNonTotalCount(nonTotalCount + 1);
  };
const handleDecrease = () => {
  setTotalCount(totalCount - 1);
  setNonTotalCount(nonTotalCount - 1)
}

  const handleResetNonTotal = () => {
    setNonTotalCount(0);
  };

    const handleResetTotal = () => {
      const result = window.confirm('¿Estás seguro de restablecer el total?');
  
      if (result) {
        // Opción "Sí" seleccionada
        setTotalCount(0);
        setNonTotalCount(0);
      } else {
        // Opción "No" seleccionada
        console.log('No se restableció el total');
      }
    };

  return (
    <>

      <div className="card">
        <h1 className='text-uppercase'>
          Total:  <span className='text-info'>{totalCount}</span>
        </h1>
      <i className="bi bi-emoji-laughing fs-1 text-warning"></i>
        <h2 >
          Cuenta actual: <span className='text-primary fw-bold '>{nonTotalCount}</span>
        </h2>
        <button onClick={handleIncrease} className='bg-primary mb-3 px-5'>Añadir</button> <br/>
        <button onClick={parseInt(nonTotalCount) > 0 ? handleDecrease : undefined} className='bg-danger me-4'><i  className='bi bi-dash'></i> </button>
        <button onClick={handleResetNonTotal }><i className="bi bi-arrow-counterclockwise"></i></button><br/>

        <button onClick={handleResetTotal} className='my-5 border border-warning text-warning'>Reiniciar Todo</button>
      </div>
  
    </>
  );
}

export default App;