import Header from '../../components/header';
import Footer from '../../components/footer';
import './home.css';

export default function Home() {
    return (
        <div>
            {/****** Header Area Start ******/}
            < Header >
                {/****** Menu Start ******/}
                < ul className="nav" >
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li className="scroll-to-section"><a href="#loans">Expired Loans</a></li>
                    {/* <div className="gradient-button" id="connectedBtn" style="display: none;"><a id="connectButton" data-mdb-modal-init data-mdb-target="#walletModal"></a></div> The problem is Style attr */}
                    <li id="modalBtn">
                        <div className="gradient-button">
                            <a id="modal_trigger" href="#modal">Connect with wallet <i className="fa fa-sign-in-alt"></i></a>
                        </div>
                    </li>
                </ul >
                <a className='menu-trigger'>
                    <span>Menu</span>
                </a>
                {/****** Menu Start ******/}
            </Header >
            {/****** Header Area End ******/}

            {/* <h1>بسم الله الرحمن الرحیم</h1> */}

            {/* <div id="modal" className="popupContainer">
                <div className="popupHeader">
                    <span className="header_title">Connect Box</span>
                    <span className="modal_close"><i className="fa fa-times"></i></span>
                </div>

                <section className="popupBody">
                    <div className="social_login">
                        <div className="">
                            <a href="#" className="social_box modal_close" id="metamaskConnectButton">
                                <span className="icon"><img src="./assets/images/MetaMask.png"></img></span>
                                <span className="icon_title">Connect with Metamask</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div> */}

            <div id="services" className="services section">
                <div className="container">
                    <div className="row">
                        {/* <div id="error-box" className="alert alert-danger" style="display : none;"></div> */}

                        <div className="col-lg-3">
                            <div className="service-item first-service">
                                <div className="background-blur"></div>
                                <div className="content">
                                    <h4>BGBT Price</h4>
                                    <h3 id="bgb-price">0.0001 $</h3>
                                    <p>Estimated BGBT price from the smart contract</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Total Assets</h4>
                                <h3 id="total-assets">10,000 $</h3>
                                <p>Total value of all deposited assets in the smart contract</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item third-service">
                                <h4>Used Token</h4>
                                <h3 id="used-tokens">100,000 BGBTs</h3>
                                <p>Total amount of used BigBangTokens (BGBT) tokens</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item fourth-service">
                                <h4>Total Users</h4>
                                <h3 id="total-users">10,000</h3>
                                <p>Total number of registered users in the platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="service-item first-service">
                                <h4>Loan Percent</h4>
                                <h3 id="loan-percentage">90%</h3>
                                <p>The percentage of borrowal loan amount</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Remaining Tokens</h4>
                                <h3 id="remaining-tokens">12,000 BGBTs</h3>
                                <p>The remaining amount of BGBT tokens in the smart contract</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Total Loans</h4>
                                <h3 id="total-borrowed-loans">100</h3>
                                <p>Total count of registered lending applications in the platform</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Vote Fee</h4>
                                <h3 id="vote-fee">1 BGBT</h3>
                                <p>Total amount of voting fee in the voting smart contract</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="service-item first-service">
                                <h4>Loan Percent</h4>
                                <h3 id="loan-percentage">90%</h3>
                                <p>The percentage of borrowal loan amount</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Remaining Tokens</h4>
                                <h3 id="remaining-tokens">12,000 BGBTs</h3>
                                <p>The remaining amount of BGBT tokens in the smart contract</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Total Loans</h4>
                                <h3 id="total-borrowed-loans">100</h3>
                                <p>Total count of registered lending applications in the platform</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-item second-service">
                                <h4>Vote Fee</h4>
                                <h3 id="vote-fee">1 BGBT</h3>
                                <p>Total amount of voting fee in the voting smart contract</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="loans" className="the-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-heading">
                                <img src="assets/images/heading-line-dec.png" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-borderless ">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Symbol</th>
                                        <th scope="col">Bail Price</th>
                                        <th scope="col">Borrower Address</th>
                                        <th scope="col">Bail Amount</th>
                                        <th scope="col">Loan Amount (BGBT)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-mdb-modal-init data-mdb-target="#repayFormModal">
                                        <th scope="row">1</th>
                                        <td><img src="./assets/images/bnb.png" alt="bnb image" className="coin-logo" /> BTC</td>
                                        <td>42,756,25.25</td>
                                        <td>0x000 ..... 0000</td>
                                        <td>0.16</td>
                                        <td>2,256011</td>
                                        {/* <div id="token-contract-addr" data-address=""></div>
                                        <div id="token-contract-abi" data-address=""></div> */}
                                    </tr>
                                    <tr data-mdb-modal-init data-mdb-target="#repayFormModal">
                                        <th scope="row">2</th>
                                        <td><img src="./assets/images/bnb.png" alt="bnb image" className="coin-logo" /> ETH</td>
                                        <td>42,756,25.25</td>
                                        <td>0x000 ..... 0000</td>
                                        <td>0.16</td>
                                        <td>2,256011</td>
                                        {/* <div id="token-contract-addr" data-address=""></div>
                                        <div id="token-contract-abi" data-address=""></div> */}
                                    </tr>
                                    <tr data-mdb-modal-init data-mdb-target="#repayFormModal">
                                        <th scope="row">3</th>
                                        <td><img src="./assets/images/bnb.png" alt="bnb image" className="coin-logo" /> BNB</td>
                                        <td>42,756,25.25</td>
                                        <td>0x000 ..... 0000</td>
                                        <td>0.16</td>
                                        <td>2,256011</td>
                                        {/* <div id="token-contract-addr" data-address=""></div>
                                        <div id="token-contract-abi" data-address=""></div> */}
                                    </tr>
                                </tbody>
                                {/* Button trigger modal */}
                                {/* <button type="button" className="btn btn-primary" data-mdb-modal-init data-mdb-target="#repayModal">
                                    Launch demo modal
                                </button> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wallet Modal */}
            {/* <div className="modal top fade" id="walletModal" tabindex="-1" aria-labelledby="walletModal" aria-hidden="true" data-mdb-backdrop="static" data-mdb-keyboard="true">
                <div className="modal-dialog modal-xl  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div id="user-wallet-modal-label" className="input-group-text copy-btn">
                                <h5 className="modal-title" style="margin-right: 2%;">Account</h5>
                                <h6 className="modal-title" id="user-wallet-address" style="margin-right: 2%;"></h6>
                                <i id="user-wallet-address-copy-icon" className="fa"></i>
                            </div>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="tabs-header-nontainer">
                                <button className="btn btn-secondary" id="dashboard-tab" style="margin-top: 2%;">Dashboard</button>
                                <button className="btn btn-primary" id="active-services-tab" style="margin-top: 2%;">My Active Services</button>
                                <button className="btn btn-secondary" id="expired-services-tab" style="margin-top: 2%;">My Expired Services</button>
                                <button className="btn btn-secondary" id="voting-tab" style="margin-top: 2%;">Voting</button>
                                <button className="btn btn-secondary" id="stacking-tab" style="margin-top: 2%;">Stacking</button>
                            </div>
                            <hr/>
                                <div id="tabs-panel-container">
                                    <div id="dashboard-panel" style="display: none; border : .5px dashed gray; padding: 2%;"></div>
                                    <div id="active-services-panel" style="display: block; border : 1px solid rgba(175, 175, 175, 0.534); padding: 2%;">
                                        <div id="tabs-header-nontainer">
                                            <button className="btn btn-secondary" id="token-based-loans-tab" style="margin-top: 2%;">Token - backed Loans</button>
                                            <button className="btn btn-primary" id="nft-based-loans-tab" style="margin-top: 2%;">NFT - backed Loans</button>
                                        </div>
                                        <hr/>
                                            <div id="lending-services-based-token" style="display: none;">
                                                <div className="table-responsive">
                                                    <button className="btn btn-outline-primary" data-mdb-modal-init data-mdb-target="#borrowFormModal" style="margin: 2% 0%;">Apply New Loan</button>
                                                    <table className="table table-striped table-hover table-borderless table-sm ">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Symbol</th>
                                                                <th scope="col">Bail Price</th>
                                                                <th scope="col">Bail Amount</th>
                                                                <th scope="col">Loan Amount (BGBT)</th>
                                                                <th scope="col">Expiration Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr id="wallet-tbl">
                                                                <th scope="row">1</th>
                                                                <td><img src="./assets/images/bnb.png" alt="bnb image" style="width: 20%;"/> BNB</td>
                                                                <td>42,756,25.25</td>
                                                                <td>0.16</td>
                                                                <td>2,256011</td>
                                                                <td id="countdown"></td>
                                                                <div id="token-contract-addr" data-address=""></div>
                                                                <div id="token-contract-abi" data-address=""></div>
                                                                <td>
                                                                    <button className="btn btn-warning p-2 flex-grow-1" data-mdb-modal-init data-mdb-target="#repayFormModal" style="margin-right: 1%;">Repay</button>
                                                                </td>
                                                            </tr>
                                                            <tr className="opacity-0">
                                                                <td><button data-mdb-modal-init data-mdb-target="#borrowFormModal"></button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div id="lending-services-based-nft" style="display: block;">
                                                <div className="container-fluid ">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-xl-3" style="margin-top: 5%;">
                                                            <div className="card overflow-hidden rounded-2">
                                                                <div className="position-relative">
                                                                    <img src="./assets/images/client-image.jpg" className="card-img-top rounded-0" alt="admin-image"/>
                                                                        <div className="bg-warning rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-mdb-modal-init data-mdb-target="#repayFormModal" title="Loan Repayment"><i className="fa fa-reply"></i></div>
                                                                </div>
                                                                <div className="card-body pt-3 p-4">
                                                                    <h4 className="text-center" style="margin-top: 5%;">Monkey Locky</h4>
                                                                    <h6 className="text-center">313d 12h 20m 14s</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div id="expired-services-panel" style="display: none; border : 1px dashed gray; padding: 2%;">
                                        <div className="table-responsive" style="padding: 2%;">
                                            <table className="table table-striped table-hover table-borderless table-sm ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Symbol</th>
                                                        <th scope="col">Bail Price</th>
                                                        <th scope="col">Bail Amount</th>
                                                        <th scope="col">Loan Amount (BGBT)</th>
                                                        <th scope="col">Expiration Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr id="wallet-tbl">
                                                        <th scope="row">1</th>
                                                        <td><img src="./assets/images/bnb.png" alt="bnb image" style="width: 20%;"/> BNB</td>
                                                        <td>42,756,25.25</td>
                                                        <td>0.16</td>
                                                        <td>2,256011</td>
                                                        <td id="countdown" className="text-danger"></td>
                                                        <div id="token-contract-addr" data-address=""></div>
                                                        <div id="token-contract-abi" data-address=""></div>
                                                        <td>
                                                            <button className="btn btn-warning p-2 flex-grow-1" data-mdb-modal-init data-mdb-target="#repayFormModal" style="margin-right: 1%;">Repay</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="opacity-0">
                                                        <td><button data-mdb-modal-init data-mdb-target="#borrowFormModal"></button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="voting-panel" style="display: none; border : 1px dashed gray; padding: 2%;"></div>
                                    <div id="stacking-panel" style="display: none; border : 1px dashed gray; padding: 2%;"></div>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-modal-init data-mdb-target="#votingFormModal">Voting</button>
                            <button type="button" className="btn btn-primary" data-mdb-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="modal top fade" id="votingFormModal" tabindex="-1" aria-labelledby="votingFormModalLabel" aria-hidden="true" data-mdb-backdrop="static" data-mdb-keyboard="true">
                <div className="modal-dialog modal-md  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="votingFormModalLabel">Voting Form</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="voting-form-panel" style="padding: 5%; display: block;">
                                <div className="card" style="margin-bottom: 7%;">
                                    <div className="btn-group">
                                        <input type="radio" className="btn-check" name="options" id="lendingLimitationTab" autocomplete="off" checked />
                                        <label className="btn btn-secondary" for="lendingLimitationTab" data-mdb-ripple-init>Lending Limitation</label>

                                        <input type="radio" className="btn-check" name="options" id="repaymentPeriodTab" autocomplete="off" />
                                        <label className="btn btn-secondary" for="repaymentPeriodTab" data-mdb-ripple-init>Repayment Period</label>
                                    </div>
                                    <div id="lendingLimitationCard" className="card-body">
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="number" id="lending-limit-vote-number-input" className="form-control" />
                                            <label className="form-label" for="lending-limit-vote-number-input">Vote Number</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="lendingLimitVote" id="increaseLendingLimitation" checked />
                                            <label className="form-check-label" for="increaseLendingLimitation">Increase Lending Limit</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="lendingLimitVote" id="decreaseLendingLimitation" />
                                            <label className="form-check-label" for="decreaseLendingLimitation">Decrease Lending Limit</label>
                                        </div>
                                        <span id="lendingLimitationTotalVoteFee" className="text-warning" style="display: none; font-size: small;"></span>
                                    </div>
                                    <div id="repaymentPeriodCard" className="card-body" style="display: none;">
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="number" id="repayment-period-vote-number-input" className="form-control" />
                                            <label className="form-label" for="repayment-period-vote-number-input">Vote Number</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="repaymentPeriodVote" id="increaseRepaymentPeriod" checked />
                                            <label className="form-check-label" for="increaseRepaymentPeriod">Increase Repayment Period</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="repaymentPeriodVote" id="decreaseRepaymentPeriod" />
                                            <label className="form-check-label" for="decreaseRepaymentPeriod">Decrease Repayment Period</label>
                                        </div>
                                        <span id="repaymentPeriodTotalVoteFee" className="text-warning" style="display: none; font-size: small;"></span>
                                    </div>
                                </div>
                                <span className="alert alert-danger" id="voting-error-message" for="vote-number-token-input" style="display: none;"></span>
                                <div className="alert alert-info" role="alert">
                                    <h6 style="margin-bottom: 7%;"><i className="fa fa-lightbulb"></i> Tips :</h6>
                                    <ul>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-outline-info disabled" style="border-style: dashed;" id="confirm-voting-btn">Confirm</button>
                                </div>
                            </div>
                            <div id="voting-transaction-page" className="text-center" style="display: none;">
                                <img src="./assets/images/transfering.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;"/>
                                    <h5 style="margin-top: 5%;">Processing transaction , Please Wait ...</h5>
                            </div>
                            <div id="voting-success-page" className="text-center" style="display: none;">
                                <div style="padding: 5%;">
                                    <h4 className="text-success" style="margin-bottom: 5%;">Success !</h4>
                                    <div>
                                        <div className="input-group mb-3" style="position: relative; left: 5%; width: 95%; margin-top: 2%;">
                                            <span className="input-group-text">Tx</span>
                                            <input
                                                id="voting-success-page-tx-hash"
                                                type="text"
                                                className="form-control"
                                                style="background-color: #00000013;"
                                                value=""
                                            />
                                            <span className="input-group-text"><i className="fa fa-file-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <a href="" target="_blank" className="btn btn-outline-danger text-danger">View Explorer</a>
                                        <button type="button" className="btn btn-success" data-mdb-dismiss="modal">Okay</button>
                                    </div>
                                </div>
                            </div>
                            <div id="voting-error-page" className="text-center" style="display: none;">
                                <img src="./assets/images/error.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;"/>
                                    <h5 style="margin-top: 5%;">Something went wrong !</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="modal top fade" id="repayFormModal" tabindex="-1" aria-labelledby="repayFormModalLabel" aria-hidden="true" data-mdb-backdrop="static" data-mdb-keyboard="true">
                <div className="modal-dialog modal-md  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="repayFormModalLabel">Loan Repayment Form</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-evenly">
                                <button type="button" id="repay-calculation-tab" className="btn btn-info" style="border-style: dashed;">
                                    1 Calculation
                                </button>
                                <button type="button" id="repay-preview-tab" className="btn btn-outline-info disabled" style="border-style: dashed;">
                                    2 Preview
                                </button>
                                <button type="button" id="repay-approval-tab" className="btn btn-outline-info disabled" style="border-style: dashed;">
                                    3 Approval
                                </button>
                                <button type="button" id="repay-receipt-tab" className="btn btn-outline-info disabled" style="border-style: dashed;">
                                    3 Receipt
                                </button>
                            </div>
                            <div id="repay-calculation-panel" style="padding: 5%; display: block;">
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="number" id="repay-calculation-token-amount-input" className="form-control" />
                                    <label className="form-label" for="repay-calculation-token-amount-input">Repayment Amount (BGBT)</label>
                                </div>
                                <span className="alert alert-danger" id="repay-error-message" for="repay-calculation-token-amount-input" style="display: none;"></span>
                                <div className="alert alert-info" role="alert">
                                    <h6 style="margin-bottom: 7%;"><i className="fa fa-lightbulb"></i> Tips :</h6>
                                    <ul>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-outline-info disabled" style="border-style: dashed;" id="repay-calculate-btn">Confirm</button>
                                </div>
                            </div>
                            <div id="repay-preview-panel" className="" style="padding: 5%; display: none;">
                                <div>
                                    <div style="padding: 5%;">
                                        <div>
                                            <h6>You will receive :</h6>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-preview-receive-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">BNB</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-preview-receive-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="repay-preview-receive-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h6>You will pay :</h6>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-preview-pay-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">BGBT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-preview-pay-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="repay-preview-pay-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-info" id="repay-btn">Repay Loan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="repay-receipt-panel" style="padding: 5%; height: 100%; display: none;">
                                <div id="repay-receipt-success" className="success-receipt" style="height: 100%; display: none;">
                                    <div style="padding: 5%;">
                                        <h4 className="text-success" style="margin-bottom: 5%;">Success !</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-success-receipt-receive-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text">MATIC</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-success-receipt-receive-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="repay-success-receipt-receive-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-success-receipt-pay-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text">BGBT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="repay-success-receipt-pay-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="repay-success-receipt-pay-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div style="position: relative; left: 5%; width: 95%; margin-top: 20%;">
                                            <div>
                                                <div className="input-group mb-3" style="position: relative; left: 5%; width: 95%; margin-top: 2%;">
                                                    <span className="input-group-text">Tx</span>
                                                    <input
                                                        id="repay-success-receipt-tx-hash"
                                                        type="text"
                                                        className="form-control"
                                                        style="background-color: #00000013;"
                                                        value=""
                                                    />
                                                    <span id="repay-success-receipt-copy-btn" className="input-group-text copy-btn"><i id="repay-success-receipt-copy-icon" className="fa fa-file-alt"></i><span id="cpoy-button-text" style="display: none;">Copied !</span></span>
                                                </div>
                                            </div>
                                            <hr style="position: relative; left: 5%; width: 95%;" />
                                            <div className="modal-footer">
                                                <a id="repay-success-receipt-explorer-btn" href="" target="_blank" className="btn btn-outline-success text-success">View Explorer</a>
                                                <button type="button" className="btn btn-success" data-mdb-dismiss="modal">Okay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="repay-await-page" className="text-center" style="display: none;">
                                    <img src="./assets/images/await.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                    <h5 style="margin-top: 5%;">Calculating , Please Wait ...</h5>
                                </div>
                                <div id="repay-approval-page" className="text-center" style="display: none;">
                                    <img src="./assets/images/transfering.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                    <h5 style="margin-top: 5%;">Please approve the contract ...</h5>
                                </div>
                                <div id="repay-transaction-page" className="text-center" style="display: none;">
                                    <img src="./assets/images/transfering.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                    <h5 style="margin-top: 5%;">Processing transaction , Please Wait ...</h5>
                                </div>
                                <div id="repay-error-page" className="text-center" style="display: none;">
                                    <img src="./assets/images/error.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                    <h5 style="margin-top: 5%;">Something went wrong !</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="modal top fade" id="borrowFormModal" tabindex="-1" aria-labelledby="borrowFormModalLabel" aria-hidden="true" data-mdb-backdrop="static" data-mdb-keyboard="true">
                <div className="modal-dialog modal-md  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="borrowFormModalLabel">Getting a Loan</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-evenly">
                                <button type="button" id="borrow-calculation-tab" className="btn btn-info" style="border-style: dashed;">
                                    1 Calculation
                                </button>
                                <button type="button" id="borrow-preview-tab" className="btn btn-outline-info disabled" style="border-style: dashed;">
                                    2 Preview
                                </button>
                                <button type="button" id="borrow-receipt-tab" className="btn btn-outline-info disabled" style="border-style: dashed;">
                                    3 Receipt
                                </button>
                            </div>
                            <div id="borrow-calculation-panel" style="padding: 5%; display: block;">
                                <div className="mb-4">
                                    <select id="borrow-calculation-collateral-token-type" className="form-control">
                                        <option value="" selected>-- Select Collateral Token --</option>
                                        <option value="matic">MATIC</option>
                                        <option value="btc">Bitcoint</option>
                                        <option value="eth">Ether</option>
                                        <option value="bnb">BNB</option>
                                        <option value="usdt">Tether</option>
                                        <option value="dai">DAI</option>
                                    </select>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="number" id="borrow-calculation-token-amount-input" className="form-control" />
                                    <label className="form-label" for="borrow-calculation-token-amount-input">Collateral Amount</label>
                                </div>
                                <span className="alert alert-danger" id="borrow-error-message" for="borrow-calculation-token-amount-input" style="display: none;"></span>
                                <div className="alert alert-info" role="alert">
                                    <h6 style="margin-bottom: 7%;"><i className="fa fa-lightbulb"></i> Tips :</h6>
                                    <ul>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                        <li style="margin-bottom: 5%; font-size: small;"><i className="fa fa-dot-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-outline-info disabled" style="border-style: dashed;" id="borrow-calculate-btn">Confirm</button>
                                </div>
                            </div>
                            <div id="borrow-preview-panel" style="padding: 5%; display: none;">
                                <div>
                                    <div style="padding: 5%;">
                                        <div>
                                            <h6>You will receive :</h6>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-preview-receive-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">BGBT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-preview-receive-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="borrow-preview-receive-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h6>You will pay :</h6>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-preview-pay-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">MATIC</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-preview-pay-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="borrow-preview-pay-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-info" id="borrow-btn">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="borrow-receipt-panel" style="padding: 5%; height: 100%; display: none;">
                                <div id="borrow-receipt-success" className="success-receipt" style="height: 100%; display: none;">
                                    <div style="padding: 5%;">
                                        <h4 className="text-success" style="margin-bottom: 5%;">Success !</h4>
                                        <div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-success-receipt-receive-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text">BGBT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-success-receipt-receive-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="borrow-success-receipt-receive-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-success-receipt-pay-amount"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text">MATIC</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    id="borrow-success-receipt-pay-from-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                                <span className="input-group-text" style="background-color: #00000013;">To</span>
                                                <input
                                                    id="borrow-success-receipt-pay-to-address"
                                                    type="text"
                                                    className="form-control"
                                                    style="background-color: #00000013; font-size: small;"
                                                    value=""
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div style="position: relative; left: 5%; width: 95%; margin-top: 20%;">
                                            <div>
                                                <div className="input-group mb-3" style="position: relative; left: 5%; width: 95%; margin-top: 2%;">
                                                    <span className="input-group-text">Tx</span>
                                                    <input
                                                        id="borrow-success-receipt-tx-hash"
                                                        type="text"
                                                        className="form-control"
                                                        style="background-color: #00000013;"
                                                        value=""
                                                    />
                                                    <span id="borrow-success-receipt-copy-btn" className="input-group-text copy-btn"><i id="borrow-success-receipt-copy-icon" className="fa fa-file-alt"></i></span>
                                                </div>
                                            </div>
                                            <div style="position: relative; left: 5%; width: 95%;">
                                                <div className="modal-footer">
                                                    <a id="borrow-success-receipt-explorer-btn" target="_blank" className="btn btn-outline-success text-success">View Explorer</a>
                                                    <button type="button" className="btn btn-success" data-mdb-dismiss="modal">Okay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="borrow-await-page" className="text-center" style="display: none;">
                                        <img src="./assets/images/await.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                        <h5 style="margin-top: 5%;">Calculating , Please Wait ...</h5>
                                    </div>
                                    <div id="borrow-transaction-page" className="text-center" style="display: none;">
                                        <img src="./assets/images/transfering.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                        <h5 style="margin-top: 5%;">Processing transaction , Please Wait ...</h5>
                                    </div>
                                    <div id="borrow-error-page" className="text-center" style="display: none;">
                                        <img src="./assets/images/error.svg" alt="Plese wait image" style="width: 50%; margin-top: 5%;" />
                                        <h5 style="margin-top: 5%;">Something went wrong !</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer>
                <div className="row">
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
                            <p>Copyright © 2024 BigBnag Group. All Rights Reserved.
                                <br />Development : <a href="" target="_blank" title="designer">Ali Moghaddam</a></p>
                        </div>
                    </div>
                </div>
            </Footer >
        </div >
    )
}