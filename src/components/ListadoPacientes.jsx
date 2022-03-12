import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {
    return (
        <div className="md: w-full lg: w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administrar tus {" "}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <Paciente />
        </div>
    )
}

export default ListadoPacientes