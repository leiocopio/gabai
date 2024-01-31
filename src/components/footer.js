import './css/footer.css'

function Footer() {

    return(
        <>
            <footer className="bg-blue-200 h-[9.375rem] w-screen flex flex-row">
             <div>
                <b>Location</b>
                <br />
                <p>
                    Barangay 171, Congressional Rd., Caloocan, Metro Manila, Philippines 1105
                </p>
             </div>
            <div>
                <b>Contacts</b>
                <br />
                <div className="flex flex-col">
                    <ul className="">
                        <li><b>Email: </b>team.paragon.ucc.bscs@gmail.com</li>
                        <li><b>Phone: </b>+63 939 419 5233</li>
                        <li><b>Facebook: </b>GabAI</li>
                    </ul>
                </div>
               
                </div>

                 <div>
                    <b>Legal</b>
                    <br />
                    <ul>
                        <li><a href="#">Cookies Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">User Agreement</a></li>
                    </ul>
             </div>

             <div>
                <b>Useful Links</b>
                <ul>
                    <li><a href="https://clients.ncr.dole.gov.ph/home/" target='_blank'>Department of Labor and Deployment</a></li>
                    <li><a href="https://www.foi.gov.ph/requests?agency=NLRCom" target='_blank'>National Labor Relations Commision</a></li>
                    <li><a href="https://www.officialgazette.gov.ph" target='_blank'>Official Gazette of the Philippines</a></li>

                </ul>
             </div>
            </footer>
        </>
    )
}

export default Footer;