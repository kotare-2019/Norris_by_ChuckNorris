import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() { 
        return (
            <React.Fragment>
                <header>
                    <h1 className='chuck-header'>CHUCK N<img className='chuck-o' src='/o.gif' />RRIS QU<img  className='chuck-o' src='/o.gif' />TES</h1>
                </header>
            </React.Fragment>
        );
    }
}
 

export default Header;