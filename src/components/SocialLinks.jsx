const SocialLinks = ({ link, children }) => {
    return <a href={link} target='_blank' rel="noreferrer">{children}</a>
};

export default SocialLinks;