import Header from '../../components/header';
import Footer from '../../components/footer';
import './home.css';

export default function Home() {
    return (
        <div>
            {/****** Header Area Start ******/}
            < Header >
                {/****** Menu Start ******/}
                <ul className="nav">
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li className="scroll-to-section"><a href="#loans">Expired Loans</a></li>
                    <div className="gradient-button" id="connectedBtn" style="display: none;"><a id="connectButton" data-mdb-modal-init data-mdb-target="#walletModal"></a></div>
                    <li id="modalBtn"><div className="gradient-button"><a id="modal_trigger" href="#modal">Connect with wallet <i className="fa fa-sign-in-alt"></i></a></div></li>
                </ul>
                <a className="menu-trigger">
                    <span>Menu</span>
                </a>
                {/****** Menu Start ******/}
            </Header >
            {/****** Header Area End ******/}

            <Footer>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading text-center">
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores.</h4>
                            <button className="btn btn-primary" id="addTokenButton">Import BGBT</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="copyright-text">
                        <p>Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                            <br/>Development: <a href="https://templatemo.com/" target="_blank" title="css templates">Ali Moghaddam</a></p>
                    </div>
                </div>
            </Footer >
        </div >
    )
}