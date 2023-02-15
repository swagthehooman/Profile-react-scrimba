import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialSection(){
    return (
        <div className="social-section">
            <TwitterIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
        </div>
    )
}

export default SocialSection;