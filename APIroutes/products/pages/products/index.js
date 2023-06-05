import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductOverview() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map((datapoint) => {
        return (
          <li key={datapoint.id}>
            <h1>
              {datapoint.id}: {datapoint.name}
            </h1>
            <p>{datapoint.description}</p>
            <div className="details">
              <p>
                Price: {datapoint.price}
                {datapoint.currency}
              </p>

              <span>#{datapoint.category}</span>
            </div>
            <button type="button">
              <Link href={`/products/${datapoint.id}`}>Details</Link>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
