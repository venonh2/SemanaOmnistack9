import React, {  useState } from 'react';
import api from '../../services/api'

function Login({history}) {

    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();
  
      const response = await api.post('/sessions', { email })
  
      const { id } = response.data[0];
        
      console.log(id)

      localStorage.setItem('user', id);

      history.push('/dashboard')
    }


    return (

        <>
            <p> Ofereça <strong>spots</strong> para programadores e encontre
    <strong>talentos</strong>
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> E-MAIL</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />

                <button className="btn" type="submit"> ENTRAR </button>
            </form>
        </>
    )
}

export default Login;