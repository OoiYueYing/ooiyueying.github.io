import React from 'react';
import  {github_url, linkedin_url}from '../../constants/siteMeta';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';

const Footer = () => {
    return (
        <footer className = "px-6 sm:px-12 py-12">
            <div className = "flex flex-col sm:flex-row items-center ">
                <div className = "flex flex-row items-center mb-6 sm:mb-0 justify-center" style = {{flex:1}}>
                    <a
                        href= {github_url}
                        className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs mr-5"
                    >
                        <FiGithub size={20} />
                    </a>
                     <a
                        href= {linkedin_url}
                        className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs mr-5"
                    >
                        <SiLinkedin size={20} />
                    </a>
                </div> 
            </div>
        </footer>
        
    );
}

export default Footer;