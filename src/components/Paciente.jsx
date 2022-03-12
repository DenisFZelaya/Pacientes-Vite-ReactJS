const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-sm px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {" "}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {" "}
            <span className="font-normal normal-case">Denis Zelaya</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {" "}
            <span className="font-normal normal-case">denisfzelaya@gmail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha de alta: {" "}
            <span className="font-normal normal-case">24/02/2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {" "}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores quis, reiciendis quibusdam fuga maxime facere iste repudiandae explicabo error praesentium vero sunt rerum aliquid quidem in soluta debitis maiores.</span>
        </p>
    </div>
    )
}

export default Paciente