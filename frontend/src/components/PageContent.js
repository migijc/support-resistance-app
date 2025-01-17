export default function PageContent({children}){
    return(
        <div className="page-content-container">
            <div>
                {children.map(child=> child)}
            </div>
            {/* <div className='ad-container'>
               <p>AD PLACEMENT</p>
            </div> */}
        </div>
    )
}
