export default function ReviewDetailsPage({
  params,
}: {
  params: { reviewId: string };
}) {
  return <div>Review Details {params.reviewId}</div>;
}
