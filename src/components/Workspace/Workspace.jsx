import './Workspace.scss'
import templateImage from '../../assets/logo.jpeg'

export default function Workspace(props){
    const {name = "shell::digital", imageURL='../../assets/logo.jpeg'} = props
    return (
        <div className='box is-flex is-flex-direction-row p-3 workspace level'>
            <img className="mr-4 workspace__logo" alt="Workspace logo" src={templateImage}/>
            <div className='level-item'>
                <h1 className='title is-6 mr-4'>{name}</h1>
            </div>
            <button className='button is-small mr-4'>
                <i class="fa-solid fa-arrow-left"/>
            </button>
        </div>
    )
}