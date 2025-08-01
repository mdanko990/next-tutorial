import DataItem from "./data-tem";

export default function DataGrid ({data}: any) {
    return (
        <ul>
            {data.map((item: any) => (
                <li key={item.id}>
                    <DataItem {...item} />
                </li>
            ))}
        </ul>
    )
}