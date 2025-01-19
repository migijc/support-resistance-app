export default function PageContent({children}){
    return(
        <div className="page-content-container">
         
                {children.map(child=> child)}
            
        </div>
    )
}
