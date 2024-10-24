const Footer = () => {
        return (
            <footer className='py-6 md:px-8 md:py-0 bg-[#04202d] text-white border-t border-gray-800'>
                <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
                    <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                        Built by
                        <a href="https://github.com/ahmedabdulnasser"
                            target='_blank'
                            className='font-medium underline underline-offset-4 mx-2'
                        >Ahmed Abdel-Nasser</a>
                        <a href="https://github.com/ahmed-u3"
                            target='_blank'
                            className='font-medium underline underline-offset-4 mr-2'
                        >Ahmed Yousri</a>
                        <a href="https://github.com/Abdelrahman1625"
                            target='_blank'
                            className='font-medium underline underline-offset-4 mr-2'
                        >Abdelrahman Adel</a>
                        <a href="https://github.com/MazenHassan10"
                            target='_blank'
                            className='font-medium underline underline-offset-4 mr-2'
                        >Mazen Hassan</a>
                        <a href="https://github.com/yusefellban"
                            target='_blank'
                            className='font-medium underline underline-offset-4 mr-2'
                        >Youssef El-Laban</a>

                        The source code is available on
                        <a href="https://github.com/ahmedabdulnasser/depi-final-proj"
                            target='_blank'
                            className='font-medium underline underline-offset-4 ml-2'>
                                GitHub
                            </a>
                    </p>
                </div>
            </footer>
    )
    }

export default Footer
