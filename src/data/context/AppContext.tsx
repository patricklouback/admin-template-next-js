import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema,
    alterarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider (props) {
    const [tema, setTema] = useState<Tema>('');

    function alterarTema() {
        setTema(tema === '' ? 'dark' : '')
    }
    
    return (
        <AppContext.Provider value={{
            tema,
            alterarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext