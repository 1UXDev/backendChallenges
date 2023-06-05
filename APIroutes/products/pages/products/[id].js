import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function handler() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) {
    console.log("an error occured");
  }

  if (!data) {
    return null;
  }

  return (
    <li key={data.id}>
      <h1>
        {data.id}: {data.name}
      </h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
      <p>#{data.category}</p>
    </li>
  );
}
