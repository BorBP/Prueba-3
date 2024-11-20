import React, { useState, useEffect } from "react";
import { obtenerClientes } from "./api/clientes";

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const data = await obtenerClientes();
                setClientes(data);
            } catch (err) {
                setError("No se pudo cargar la lista de clientes");
            }
        };
        fetchClientes();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Listado de Clientes</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Edad</th>
                        <th>Género</th>
                        <th>Saldo</th>
                        <th>Activo</th>
                        <th>Satisfacción</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.cliente_id}</td>
                            <td>{cliente.edad}</td>
                            <td>{cliente.genero}</td>
                            <td>{cliente.saldo}</td>
                            <td>{cliente.active ? "Sí" : "No"}</td>
                            <td>{cliente.nivel_de_satisfaccion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaClientes;
