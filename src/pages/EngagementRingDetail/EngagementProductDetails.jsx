import React from 'react'

const EngagementProductDetails = () => {
  return (
    <div className="StoneProductInfo rounded-2.5xl p-3 bg-customGray-150 mt-4 mb-4">
    <h3 className="StoneProductInfo__title flex items-center gap-2 mb-2" tabIndex="-1">
        <svg className="w-8 h-8 p-1.5 rounded-full bg-white overflow-visible" aria-hidden="true" focusable="false">
            <svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1578 4.461L18.3882 10.0077L24.6247 4.461" stroke="currentColor" stroke-miterlimit="10"></path>
                <path d="M23.7463 9.99799C26.107 11.2008 27.9939 13.1634 29.1032 15.5695C30.2124 17.9756 30.4792 20.685 29.8607 23.2613C29.2422 25.8376 27.7744 28.1306 25.6937 29.7708C23.6131 31.4111 21.0408 32.3031 18.3913 32.3031C15.7418 32.3031 13.1695 31.4111 11.0889 29.7708C9.0082 28.1305 7.54036 25.8375 6.92185 23.2613C6.30335 20.685 6.57021 17.9756 7.67943 15.5695C8.78866 13.1634 10.6756 11.2008 13.0363 9.99799" stroke="currentColor" stroke-linecap="round"></path>
            </svg>
        </svg>
        Know your setting
    </h3>
    <div className='cpcst-details-wrapper grid grid-cols-2 gap-2 items-stretch md:grid-cols-2'>
        <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
            <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5H3C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5H13C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5Z" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.71289 3.60535L8.16648 5.06315L10.6201 3.60535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 4.85535V1.10535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M10.6201 12.3946L8.16648 10.9368L5.71289 12.3946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 11.1446V14.8946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path></svg></svg>
                <p className="cpcst-detail-title" tabIndex="-1">Width</p>
            </div>
            <p className='StoneDetailBlock__content-value  flex-1 mb-2 lg:mb-3'>1.8mm</p>
            <span className='StoneDetailBlock__desc'>Measured at the base of the ring</span>
        </div>
        <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
            <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5H3C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5H13C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5Z" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.71289 3.60535L8.16648 5.06315L10.6201 3.60535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 4.85535V1.10535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M10.6201 12.3946L8.16648 10.9368L5.71289 12.3946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 11.1446V14.8946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path></svg></svg>
                <p className="cpcst-detail-title" tabIndex="-1">PROFILE</p>
            </div>
            <p className='StoneDetailBlock__content-value   mb-2'>Medium</p>
            <div className='StoneDetailBlock__content-image-container mb-2 relative flex items-center gap-1'>
                <svg className="StoneDetailBlock__content-image w-auto h-7.5" aria-hidden="true" focusable="false" viewBox="0 0 44 26"><svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.0918 13.4185H37.5088C35.449 13.4185 32.6711 13.6237 30.1885 14.461C30.4879 13.8228 30.7239 13.1499 30.8757 12.4443H41.0918C42.1943 12.4443 43.0918 11.5474 43.0918 10.4443C43.0918 9.34131 42.1943 8.44434 41.0918 8.44434H30.8757C29.9543 4.16388 26.1437 0.944336 21.5918 0.944336C17.0399 0.944336 13.2292 4.16388 12.3079 8.44434H2.0918C0.989258 8.44434 0.0917975 9.34131 0.0917975 10.4443C0.0917975 11.5474 0.989258 12.4443 2.0918 12.4443H12.3079C12.46 13.1511 12.6965 13.825 12.9966 14.4641C10.2085 13.5418 7.05835 13.4185 5.6748 13.4185H2.08594C0.983158 13.4185 0.0859375 14.3156 0.0859375 15.4185C0.0859375 16.5212 0.983158 17.4185 2.08594 17.4185H5.67481C6.74427 17.4185 10.4186 17.5089 12.7955 18.673C14.684 19.5978 18.4863 22.8961 20.2332 24.511C20.6024 24.8539 21.0854 25.0435 21.5918 25.0435C22.0981 25.0435 22.5812 24.8539 22.9519 24.5097C24.6973 22.8961 28.4996 19.5978 30.3881 18.673C32.5061 17.6361 35.4294 17.4185 37.5088 17.4185H41.0918C42.1946 17.4185 43.0918 16.5212 43.0918 15.4185C43.0918 14.3156 42.1946 13.4185 41.0918 13.4185L41.0918 13.4185ZM13.0918 10.4443C13.0918 8.98774 13.4609 7.61609 14.1094 6.41651L15.3184 7.27534V13.6397L13.9707 14.1846C13.4134 13.0541 13.0918 11.7875 13.0918 10.4443L13.0918 10.4443ZM14.3345 14.8465L15.6646 14.3088L21.2168 17.5145V18.9254C18.3003 18.7972 15.766 17.1973 14.3345 14.8465H14.3345ZM21.5918 4.10938L27.1152 7.29834V13.6763L21.5918 16.8647L16.0684 13.6763V7.29834L21.5918 4.10938ZM21.5918 19.9443C21.7601 19.9443 21.9243 19.9277 22.0906 19.9191C21.9177 20.0684 21.7454 20.2176 21.592 20.3527C21.4349 20.2141 21.2656 20.0671 21.095 19.9192C21.2605 19.9278 21.4241 19.9443 21.5918 19.9443ZM21.9668 18.9254V17.5145L27.4773 14.3329L28.6808 15.1232C27.223 17.3244 24.7688 18.8022 21.9668 18.9253V18.9254ZM31.0918 9.44434H41.0918C41.6436 9.44434 42.0918 9.89307 42.0918 10.4443C42.0918 10.9956 41.6436 11.4443 41.0918 11.4443H31.0918V9.44434ZM29.0698 14.4811L27.8652 13.6901V7.27533L29.0742 6.4165C29.7227 7.61608 30.0918 8.98773 30.0918 10.4443C30.0918 11.9045 29.7212 13.2795 29.0698 14.4811V14.4811ZM28.6855 5.77325L27.4695 6.63714L21.9668 3.45971V1.96332C24.7721 2.08661 27.2284 3.56787 28.6855 5.77326V5.77325ZM21.2168 1.96331V3.45971L15.7141 6.63714L14.498 5.77325C15.9552 3.56787 18.4115 2.0866 21.2168 1.96331ZM12.0918 11.4443H2.0918C1.54004 11.4443 1.0918 10.9956 1.0918 10.4443C1.0918 9.89307 1.54004 9.44434 2.0918 9.44434H12.0918V11.4443ZM41.0918 16.4185H37.5088C35.3232 16.4185 32.2383 16.6538 29.9482 17.7749C27.4268 19.0098 22.3232 23.729 22.2715 23.7769C22.0801 23.9546 21.8359 24.0435 21.5918 24.0435C21.3476 24.0435 21.1035 23.9546 20.9121 23.7769C20.8603 23.729 15.7568 19.0098 13.2353 17.7749C10.665 16.5161 6.79882 16.4185 5.67479 16.4185H2.08594C1.53321 16.4185 1.08594 15.9707 1.08594 15.4185C1.08594 14.8662 1.53321 14.4185 2.08594 14.4185H5.67481C7.19642 14.4185 10.9388 14.5709 13.7817 15.8394C15.0604 17.6845 16.9756 19.0489 19.2065 19.629C20.1719 20.4345 21.0332 21.1896 21.5918 21.6914C22.15 21.1898 23.0073 20.4354 23.9704 19.6307C26.2059 19.0511 28.1252 17.6843 29.405 15.835C31.988 14.6773 35.2109 14.4185 37.5088 14.4185H41.0918C41.6445 14.4185 42.0918 14.8662 42.0918 15.4185C42.0918 15.9707 41.6445 16.4185 41.0918 16.4185H41.0918ZM24.8435 8.969L21.8435 5.969L25.8435 7.969V12.8832L24.8435 8.969Z" fill="black"></path></svg></svg>
            </div>
            <span className='StoneDetailBlock__desc'>Only stacks with a <br /> chevron/curved band</span>
        </div>

        <div className='StoneDetailBlock StoneDetailBlock__fullwidth p-3 flex flex-col justify-between'>
            <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.52005 11.0862L0.930664 9.00729L1.6538 6.88812" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M2.73948 6.25928L1.65369 6.88816L4.5099 8.54243" stroke="#668BAD" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.24255 8.38739L4.52016 11.0862" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M13.9753 7.21783L15.0694 9.13377L8.10916 13.1651L4.51978 11.0862L5.62773 9.18988" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M5.2428 8.96701L8.09901 10.6213L13.9752 7.21785L12.5718 6.40503" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M8.09924 10.6213L8.10928 13.1651" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M11.4784 4.48907L12.5725 6.40501L6.70633 9.81426L3.11694 7.73534L3.84008 5.61618" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M6.69618 7.27048L11.4783 4.48911L8.62205 2.83484L3.83997 5.61622L6.69618 7.27048Z" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M6.69641 7.27045L6.70645 9.81426" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path></svg></svg>
                <p className="cpcst-detail-title" tabIndex="-1">METAL</p>
            </div>
            <p className='StoneDetailBlock__content-value  flex-1 mb-2 lg:mb-3'>14k White Gold</p>
            <div className="SettingDetailBlock__graph-container mt-3 flex items-center gap-4 mb-2 lg:mb-3">
                <div className="SettingDetailBlock__graph">
                    <svg preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 500 500">
                        <g transform="translate(250, 250)">
                            <path d="M250,0A250,250,0,1,1,-214.716,-128.051L-137.418,-81.953A160,160,0,1,0,160,0Z" style={{ fill: 'rgb(240, 230, 140)' }}></path>
                            <path d="M250,0L160,0Z" style={{ fill: 'rgb(232, 232, 232)' }}></path>
                            <path d="M133.744,-211.217A250,250,0,0,1,224.109,-110.792L143.43,-70.907A160,160,0,0,0,85.596,-135.179Z" style={{ fill: 'rgb(186, 196, 200)' }}></path>
                            <path d="M224.109,-110.792A250,250,0,0,1,250,0L160,0A160,160,0,0,0,143.43,-70.907Z" style={{ fill: 'rgb(189, 186, 174)' }}></path>
                            <path d="M-214.716,-128.051A250,250,0,0,1,133.744,-211.217L85.596,-135.179A160,160,0,0,0,-137.418,-81.953Z" style={{ fill: 'rgb(184, 115, 51)' }}></path>
                        </g>
                    </svg>
                </div>
                <div className="SettingDetailBlock__graph-text-container grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                        <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full gold"></div>
                        58.5% Gold
                    </div>
                    <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                        <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full copper"></div>
                        25.4% Copper
                    </div>
                    <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                        <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full zinc"></div>
                        8.7% Zinc
                    </div>
                    <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                        <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full nickel"></div>
                        7.3% Nickel
                    </div>
                </div>
            </div>
            <span className='StoneDetailBlock__desc'>The secret sauce that makes this piece. <br /> *All white gold pieces are Rhodium plated</span>
        </div>
    </div>
    <div className='add-extra-feature-sec StoneDetailBlock StoneDetailBlock__extras mt-2 p-3 flex items-center justify-between gap-2 text-customGray-500'>
        <div className='extra-star-icon flex items-center gap-1'>
            <svg className="w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 14 14">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.90022 1.46712L8.09914 4.77441L8.21738 5.10059L8.56431 5.10399L12.2173 5.13974L9.31681 7.14024L9.00637 7.35436L9.12693 7.71169L10.226 10.969L7.17558 8.95637L6.90021 8.77468L6.62485 8.95637L3.57446 10.969L4.67351 7.71169L4.79407 7.35436L4.48363 7.14024L1.58315 5.13974L5.23613 5.10399L5.58306 5.10059L5.7013 4.77441L6.90022 1.46712Z" stroke="#D89571">
                    </path>
                </svg>
            </svg>
            <p className="cpcst-detail-title" tabIndex="-1">Extras</p>
        </div>
        <div className='ExtrasText text-black underline'>Add Extra Features</div>
    </div>
</div>
  )
}

export default EngagementProductDetails