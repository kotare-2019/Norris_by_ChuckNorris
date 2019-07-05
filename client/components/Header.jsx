import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() { 
        return (
            <React.Fragment>
                <header>
                   <h1 className='chuck-header'> <img src='/norris.png' className='norris-face'/>CHUCK N<img className='chuck-o' src='/approved.png' />RRIS QU<img  className='chuck-o' src='/approved.png' />TES<img src='/norris.png' className='norris-face'/> </h1>
                </header>
            </React.Fragment>
        );
    }
}
 

export default Header;