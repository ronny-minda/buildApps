import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { ChevronLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Editor from '@monaco-editor/react';
import { toast } from "sonner"

const Build = () => {

  const [ sele, setSele ] = useState("")
  const [ textoNombre, setTextoNombre ] = useState("")
  const [ archivoSh, setArchivoSh ] = useState("")
  const [ codeSh, setCodeSh ] = useState("")

  const tecnologiasReact = [
    {name: "Tailwindcss",},
    {name: "Zustand"},
    {name: "TanStackQuery"},
    {name: "ReactRouter"},
    {name: "Axios"}
  ]

  const tec = [
    "React",
    "Vue",
    "Angular",
  ]

  const construir = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

//    console.log('Datos del formulario:', data);

    const {
      nombreProyecto,
      Axios,
      Tailwindcss,
      Zustand,
      TanStackQuery,
      ReactRouter,
    } = data

    const textoScript = `
#!/bin/bash

# Nombre del proyecto
echo "Nombre del proyecto:"
project_name="${nombreProyecto}"

# Crear un proyecto Vite con React usando npm
echo "Creando un proyecto Vite con React llamado $project_name..."
npm create vite@latest $project_name -- --template react

# Moverse al directorio del proyecto
cd $project_name

# Instalar las dependencias principales
echo "Instalando las dependencias principales..."
npm install
${
Tailwindcss == "on" ? `
# Instalar TailwindCSS y las dependencias relacionadas
echo "Instalando TailwindCSS, PostCSS y Autoprefixer..."
npm install -D tailwindcss postcss autoprefixer

# Inicializar TailwindCSS con el archivo de configuración
echo "Inicializando TailwindCSS..."
npx tailwindcss init -p

# Cambiar el contenido del archivo tailwind.config.js
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

echo "El archivo tailwind.config.js ha sido actualizado."

# Moverse a la carpeta src
cd src

# Verificar si el archivo index.css existe
if [ -f "index.css" ]; then
    # Agregar las líneas de Tailwind al inicio del archivo index.css
    echo -e "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n" | cat - index.css > temp && mv temp index.css
    echo "El archivo index.css ha sido actualizado con las directivas de Tailwind."
else
    echo "El archivo index.css no existe en la carpeta src."
fi

# Retroceder una dirección atrás
cd ..

echo "Regresando a la carpeta anterior."
`:""
}
${
Zustand == "on" ? `
# Instalar Zustand
echo "Instalando Zustand..."
npm install zustand
`:""
}
${
TanStackQuery == "on" ? `
# Instalar React Query
echo "Instalando React Query..."
npm i @tanstack/react-query
`:""
}
${
ReactRouter == "on" ? `
# Instalar React Router DOM
echo "Instalando React Router DOM..."
npm install react-router-dom
`:""
}
# Mensaje de éxito
echo "¡El proyecto Vite con React '$project_name' ha sido creado e instalado con éxito!"
echo "Las dependencias adicionales han sido instaladas correctamente."
`
 
  setCodeSh(textoScript)



  };

  const descargarArchivo = () => {
    const archivo = new Blob([codeSh], { type: 'text/plain' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = `vite_react_${textoNombre}.sh`;
    enlace.click();
    URL.revokeObjectURL(enlace.href);

    navigator.clipboard.writeText(`vite_react_${textoNombre}.sh`)
  .then(() => {
    toast(`Texto copiado: vite_react_${textoNombre}.sh`)
  })
  .catch(err => {
    toast.error('Error al copiar al portapapeles:', err)
  })

  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      
      className="h-full w-full"
    >

      <AnimatePresence mode="wait">
        {
          sele.length!=0 ? 
          <motion.div
            key="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button 
              variant="ghost"
              className="rounded-full shadow"
              size="icon"
              onClick={()=>setSele("")}
            >
              <ChevronLeft/>
            </Button>
          </motion.div>
          :
          <motion.div
            key="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
      {
        tec.map((value, key) => {
          return (
            <Button 
              className="mx-2"
              key={key} 
              onClick={()=> setSele(value)} 
              variant="outline"
              disabled={value=="React"?false:true}
            >
              {value}
            </Button>
          )
        })
      }
      </motion.div>
        }
      </AnimatePresence>

      <Separator aria-orientation="horizontal" className="my-4"/>


      <AnimatePresence>
        {
          sele.length!=0 && 

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        className="flex flex-wrap flex-col justify-around items-center sm:flex-row"
      >
      <form 
        onSubmit={(e)=> construir(e)}
        className="w-1/2"
      >

        <span className="my-3">Build React</span>
        
        <div className="my-5 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nombreProyecto">Nombre Projecto</Label>
          <Input
            onChange={(e)=> {
              const value = e.target.value
              if( /^[a-z0-9_-]+$/.test(value) ) {
                setTextoNombre(value)
              }
            }}
            value={textoNombre}
            type="nombreProyecto" 
            id="nombreProyecto" 
            name="nombreProyecto" 
            placeholder="Nombre Projecto" 
          />
          <span className="text-[12px] text-red-500">Sin espacios ni mayusculas</span>
        </div>
        {
          tecnologiasReact.map((value, key) => {
            const { name } = value
            return (

              <div key={key} className="flex items-center space-x-2 my-3">
                <Checkbox name={name} id={`${name}${key}`} />
                <Label htmlFor={`${name}${key}`}>{name}</Label>
              </div>
            )
          })
        }
        
        <Button type="submit" className="mt-2">Construir</Button>
        <Button 
          type="button" 
          variant="secondary" 
          className="ml-2 mt-2"
          onClick={()=> descargarArchivo()}
        >Descargar</Button>
      <Editor 
            height="20px" 
            width="100%" 
            defaultLanguage="plaintext" 
            defaultValue="Comando de ejecucion del script."
            value={`bash vite_react_${textoNombre}.sh`}                         />
        </form>
        
        <div className="h-[400px] w-[300px] shadow">
          <div className="text-[12px] h-[5%] w-auto bg-white felx justify-center items-center px-2 shadow inline-block">{`vite_react_${textoNombre}.sh`}</div>
          <Editor 
            height="95%" 
            width="100%" 
            defaultLanguage="plaintext" 
            defaultValue="Codigo bash linux"
            value={codeSh}
          />
        </div>
        </motion.div>
        }

        </AnimatePresence>
    </motion.div>
  )
}

export default Build
