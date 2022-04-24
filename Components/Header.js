import React from 'react'

const Header =()=> {
    return(
        <header className ='header'>
            <div className ='container-fluid'>
                <div className ='row'>
                    <h1 className ='h1 text-center'><svg className="icon icon-sphere"><use xlinkHref="#icon-sphere"></use></svg>wanderlust</h1>
                </div>
            </div>
        </header>
    )
}

export default Header