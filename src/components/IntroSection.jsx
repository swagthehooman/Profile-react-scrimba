import React from "react";
import MailIcon from '@mui/icons-material/Mail';
function IntroSection(){
    return <div className="intro">
        <h2 className="name">Swagnik Das</h2>
        <p className="job">Frontend Developer</p>
        <p className="site">swagnikdas.website</p>
        <button className="mail-button"><MailIcon fontSize="small" className="mail-icon"/>Email</button>
    </div>
}
export default IntroSection;