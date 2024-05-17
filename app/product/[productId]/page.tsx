export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>My Product Details {params.productId}</h1>;
}
