import { useState } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("onSubmit Presionado")

        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true)
            return;
        }

        setError(false)

        const objetoPaciente = {
            nombre, propietario, email, fecha, sintomas
        }

        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")

        setPacientes([...pacientes, objetoPaciente]);
    }

    return (
        <div className="md:w-1/2 lg: w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
                {error && <Error mensaje="Todos los campos son obligatorios" />}
                <div className="mb-5">
                    <label className="block p-2 mt-2 text-gray-700 uppercase font-bold" htmlFor="mascota">Mascotas</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block p-2 mt-2 text-gray-700 uppercase font-bold" htmlFor="propietario">Propietario</label>
                    <input value={propietario} onChange={(e) => setPropietario(e.target.value)} id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email contacto" className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 uppercase font-bold" htmlFor="falta">Fecha de Alta</label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)} id="falta" type="date" className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" placeholder="Describe los síntomas" className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" />
                </div>
                <input type="submit" value="Agregar" className="bg-indigo-500 w-full p-3  uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all" />
            </form>
        </div>
    )
}

export default Formulario