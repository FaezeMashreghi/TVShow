import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetailsByIdService } from "../../api/services/showService";
import { Show } from "../../shared/types/shows";

const ShowDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState<Show | null>(null);

  useEffect(() => {
    if (id) {
      getShowDetailsByIdService(+id)
        .then((response) => {
          setShowDetails(response);
        })
        .catch(() => null)
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{showDetails?.name}</h1>
      <img
        src={showDetails?.image?.medium || "https://via.placeholder.com/300"}
        alt={showDetails?.name}
        className="my-4"
      />
      <div dangerouslySetInnerHTML={{ __html: `${showDetails?.summary}` }} />

      <p>
        <strong>Genres:</strong> {showDetails?.genres.join(", ")}
      </p>
      <p>
        <strong>Language:</strong> {showDetails?.language}
      </p>
      <p>
        <strong>Premiered:</strong> {showDetails?.premiered}
      </p>
      {showDetails?.officialSite && (
        <a
          href={showDetails?.officialSite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit Official Site
        </a>
      )}
    </div>
  );
};
export default ShowDetailPage;
