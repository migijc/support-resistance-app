export default function Header({children}){

    return (
        <div className="header-container">
            {children.map(child=> child)}
        </div>
    )
}
