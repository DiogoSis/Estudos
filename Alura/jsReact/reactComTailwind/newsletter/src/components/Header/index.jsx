import ToggleTheme from "../ToggleTheme"

const Header = ({user}) => {
    return(
        <div className="flex h-20 bg-sete-200 dark:bg-dark-100 justify-between items-center px-5 sm:rounded-2xl sm:m-5">
            <span className="text-gray-100">Olá,{user || "usuário"}</span>
            <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer ">Newsletter</h1>
            <ToggleTheme/>
        </div>

    )
}

export default Header