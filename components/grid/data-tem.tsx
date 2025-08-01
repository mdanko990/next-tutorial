export default function DataItem ({title, slug, description}: any) {
    return (
        <div>
            <h2>{title} - <span>{slug}</span></h2>
            <p>{description}</p>
        </div>
    )
}