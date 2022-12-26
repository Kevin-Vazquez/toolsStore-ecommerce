import React from 'react';
import Layout from '../components/Layout';
import Suggestions from '../components/sugg';

export default function Admin() {
    const submit = (e)=>{
        e.preventDefault();
    }
    const keyup = (e)=>{
        console.log(e.target.name);
    }
  return (
    <Layout title="Administracion">
        <div className='w-full h-full flex justify-center items-center'>
            <form onSubmit={submit} className='bg-slate-900 p-2 w-96 h-3/4 rounded-3xl flex flex-col justify-between items-center gap-3 form'>
                <h1 className='text-gray-50 text-2xl'>Agregar mercaderias</h1>
                <input type="text" name='name' placeholder="Nombre" onKeyUp={keyup}/>
                <Suggestions name="name" className="hide"/>
                <input type="text" name='slug' placeholder="Palabra clave" onKeyUp={keyup}/>
                <Suggestions name="slug" className="hide"/>
                <input type="text" name='category' placeholder="Categoria" onKeyUp={keyup}/>
                <Suggestions name="category" className="hide"/>
                <input type="file"/>
                <input type="number" name='price' placeholder="Precio" onKeyUp={keyup}/>
                <Suggestions name="price" className="hide"/>
                <input type="text" name='brand' placeholder="Marca" onKeyUp={keyup}/>
                <Suggestions name="brand" className="hide"/>
                <input type="number" name='countInStock' placeholder="Stock" onKeyUp={keyup}/>
                <Suggestions name="countInStock" className="hide"/>
                <input type="text" name='description' placeholder="Descripcion" onKeyUp={keyup}/>
                <Suggestions name="description" className="hide"/>
                <button className='primary-button'>Agregar</button>
            </form>
        </div>
    </Layout>
  )
}
