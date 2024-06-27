import './header.css'

export default function Header(props) {
    return(
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/****** Logo Start ******/}
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo.png" alt="Chain App Dev"/>
                            </a>
                            {/****** Logo End ******/}

                            {props.children}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}