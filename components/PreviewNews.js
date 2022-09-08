// import Logo from '../../assets/Logo.png';

export const PreviewNews = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta urna nisl, sed commodo purus cursus id. Cras lobortis hendrerit molestie. Etiam ullamcorper mauris erat. Praesent et pharetra libero. Praesent tempor elementum semper. Fusce et diam consequat dui porta posuere a quis sapien. Donec facilisis felis purus, id posuere magna malesuada eu. Vivamus in metus sed ante mattis interdum at id arcu. Vestibulum sapien tellus, aliquam ut ullamcorper dictum, bibendum ut orci. Morbi nec mi porttitor, pellentesque nunc vitae, hendrerit leo. Curabitur vel luctus diam, eget faucibus nibh. Morbi vitae risus faucibus, laoreet ex commodo, auctor augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta urna nisl, sed commodo purus cursus id. Cras lobortis hendrerit molestie. Etiam ullamcorper mauris erat. Praesent et pharetra libero. Praesent tempor elementum semper. Fusce et diam consequat dui porta posuere a quis sapien. Donec facilisis felis purus, id posuere magna malesuada eu. Vivamus in metus sed ante mattis interdum at id arcu. Vestibulum sapien tellus, aliquam ut ullamcorper dictum, bibendum ut orci. Morbi nec mi porttitor, pellentesque nunc vitae, hendrerit leo. Curabitur vel luctus diam, eget faucibus nibh. Morbi vitae risus faucibus, laoreet ex commodo, auctor augue.`
    const logoUrl = "https://static01.nyt.com/images/2022/09/09/opinion/01lago/01lago-thumbStandard-v2.jpg"
    const writerName = "By Miguel Lago"
    const title = "Some Nice Title of your article"
    
    const cutWord = (text) => {
        const a = text.split(' ');
        if(a.length > 110) {
            const result = a.slice(0, 130);
            result.push('...')
            return result.join(' ')
        } else {
            return text
        }
    }

    cutWord(lorem)
    
    return (
        <div className="py-4 border-b-[1px]">
            <img src={logoUrl} alt="Articles" className="w-24 px-2 float-left"></img>
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex flex-row items-center justify-end space-x-2 text-xs">
                    <p className="w-max">{writerName}</p>
                    <p>·</p>
                    <p>9/20/2022</p>
                </div>
            </div>
            <p className="text-sm">{cutWord(lorem)}</p>
            <div className="flex flex-row justify-between py-2">
                <p className="rounded-full px-2 py-1 border-[1px] shadow-md text-xs">Programming</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-red-600 w-6 h-6 transition duration-300 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
        </div>
    )
}