import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
    return (
        <a
            href={href}
            aria-label={label}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {children}
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
            <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between">
                <p>© 2025 Nirav Mathukiya . All rights reserved</p>
                <div className="flex space-x-6">
                    <SocialButton label="WhatsApp" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjcQQRBXsTSWDhXnbMTTFnNdzfVvtmxVClfNjWkTmfcZfgwjmplKlHznpLcKwxVsFBsq">
                        <FaEnvelope />
                    </SocialButton>

                    <SocialButton label="GitHub" href="https://github.com/NiravMathukiya">
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label="Instagram" href="https://www.instagram.com/nirav_mathukiya007?igsh=b2xqd2I3YTQ4dmhp">
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label="LinkedIn" href="https://www.linkedin.com/in/nirav-mathukiya007">
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label="WhatsApp" href="https://wa.me/6354813652">
                        <FaWhatsapp />
                    </SocialButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
