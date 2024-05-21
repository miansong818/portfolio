import React from 'react'

const HeaderSocials = () => {
    const socialMedias = [
        {
            name: 'instagram',
            link: 'https://www.instagram.com/'
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/?lang=en'
        },
        {
            name: 'behance',
            link: 'https://www.behance.net/'
        },
        {
            name: 'dribbble',
            link: 'https://dribbble.com/'
        },
        {
            name: 'pinterest',
            link: 'https://www.pinterest.com/'
        },
    ]
    return (
        <div className="home__socials">
            {socialMedias.map(({ name, link }, key) =>
                <a href={link} className="home__social-link" target='_blank' id={key}>
                    <i className={'fa-brands fa-' + name}></i>
                </a>
            )}

        </div>
    )
}

export default HeaderSocials