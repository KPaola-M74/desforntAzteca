
import Image from "next/image";

const Login = () =>{
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-full h-full flex flex-col">
        <div className="absolute top-1/4 left-1/10"></div>
        <div className="w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/images/background4.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full object-cover"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#ffffff] flex flex-col p-20 justify-between ">
        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-2">
            <h3
              className="text-5xl text-[#49B675] font-semibold mb-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Bienvenid@!
            </h3>
            <p className="text-sm text-[#49B675] mb-2">
              {" "}
              Conoce sobre la civilización azteca.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
        </div>
        <div className="w- full flex items-center justify-between">
          <p className="text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2">
            Olvidé mi contraseña
          </p>
        </div>
        <div className="w-full flex flex-col my-4">
          <button
            className="w-full text-white my-2 bg-[#49B675] rounded-md p-4 text-center flex items-center justify-center"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            {" "}
            Iniciar sesión
          </button>
          <button
            className="w-full text-white my-2 bg-[#49B675] rounded-md p-4 text-center flex items-center justify-center"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            {" "}
            Iniciar sesión con Google
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#49B675]">
            ¿No tienes cuenta?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Registrate
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;