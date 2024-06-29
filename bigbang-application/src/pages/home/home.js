import Header from '../../components/header';
import Footer from '../../components/footer';
import './home.css';

export default function Home() {
    return (
        <div>
            {/****** Header Area Start ******/}
            < Header >
                {/****** Menu Start ******/}
                <ul class="nav">
                    <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                    <li class="scroll-to-section"><a href="#loans">Expired Loans</a></li>
                    <div class="gradient-button" id="connectedBtn" style="display: none;"><a id="connectButton" data-mdb-modal-init data-mdb-target="#walletModal"></a></div>
                    <li id="modalBtn"><div class="gradient-button"><a id="modal_trigger" href="#modal">Connect with wallet <i class="fa fa-sign-in-alt"></i></a></div></li>
                </ul>
                <a class='menu-trigger'>
                    <span>Menu</span>
                </a>
                {/****** Menu Start ******/}
            </Header >
            {/****** Header Area End ******/}

            <Footer>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="section-heading text-center">
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores.</h4>
                            <button class="btn btn-primary" id="addTokenButton">Import BGBT</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="copyright-text">
                        <p>Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                            <br/>Development: <a href="https://templatemo.com/" target="_blank" title="css templates">Ali Moghaddam</a></p>
                    </div>
                </div>
            </Footer >
        </div >
    )
}