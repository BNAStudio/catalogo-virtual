import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const handleUsernameChange = e => setUsername(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (username === 'usuario' && password === '123456') {
            console.log('Inicio de sesión exitoso');
            history('/main-page');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <>
            <p><b>Para ingresar digitar:</b></p>
            <p><i>Usuario: usuario</i></p>
            <p><i>contraseña: 123456 </i></p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </>
    );
};

export default LoginForm;