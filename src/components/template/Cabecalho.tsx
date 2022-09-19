import Titulo from './Titulo'
import BotaoAlternarTema from './BotaoAlternarTema'
import useAppData from '../../data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alterarTema } = useAppData()

    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alterarTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}