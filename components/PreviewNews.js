import { useRouter } from "next/router";

export const PreviewNews = ({
    id,
    title,
    abstract,
    section,
    byline,
    published_date,
    media,
    des_facet
}) => {
    const router = useRouter()
    const imageUrl = media[0]?.["media-metadata"][0].url ? media[0]?.["media-metadata"][0].url : 'https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg'
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

    return (
        <div className="flex flex-col border-b-[1px] px-2 w-full cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
            <div
                onClick={async (e) => {
                    e.preventDefault();
                    router.push(`/news/${id}`)
                }} 
                className="py-4 w-full">
                <img src={imageUrl} alt="Articles" className="w-24 px-2 lg:float-left"></img>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="flex flex-row items-start lg:justify-end space-x-2 text-xs">
                        <p className="w-max">{byline ? byline : 'Anonymous'}</p>
                        <p>·</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <p className="py-2 text-sm">{cutWord(abstract)}</p>
            </div>
            <div className="flex flex-row py-2 flex-wrap">
                <p className="rounded-full px-6 py-1 mb-2 border-[1px] shadow-md text-xs border-[#1976d2] mr-2">{section}</p>
                {
                    des_facet?.map((item, index) => {
                        return (
                            <p key={index} className="rounded-full px-3 py-1 mr-2 mb-2 border-[1px] shadow-md text-xs">{item}</p>
                        )
                    })
                }
            </div>
        </div>

    )
}