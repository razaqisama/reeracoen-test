export const DetailNews = ({
    title,
    byline,
    published_date,
    abstract
}) => {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-4xl">{title}</h1>
            <div className="flex flex-row space-x-2 pb-2 text-sm py-1">
                <p>{byline}</p>
                <p>·</p>
                <p>{published_date}</p>
            </div>
            <p>{abstract}</p>
        </div>
    )
}