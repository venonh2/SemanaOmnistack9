import React, { useState, useMemo } from 'react';
import api from '../../services/api'
import camera from '../../assets/grande-camera-digital.svg'
import './styles.css'

function New({history}) {

    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(() =>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(e) {

        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        const response = await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard')
    }


    return (

        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail" 
                 style={{ backgroundImage: `url(${preview})` }}
                 className={thumbnail ? 'has-thumbnail' : ''}>
                <input type="file" onChange={e => setThumbnail(e.target.files[0])}/>
                
            </label>
            <label htmlFor="company"> EMPRESA * </label>
            <input
                id="company"
                placeholder="Sua empresa incrivel"
                value={company}
                onChange={e => setCompany(e.target.value)}
                required
            />

            <label htmlFor="company"> TECNOLOGIAS * <span>(separadas por virgula)</span> </label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam"
                value={techs}
                onChange={e => setTechs(e.target.value)}
                required
            />

            <label htmlFor="price"> VALOR DA DIÁRIA * </label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={e => setPrice(e.target.value)}
                required 
            />

            <button className="btn" type="submit"> Cadastrar</button>
        </form>
    )
}

export default New;