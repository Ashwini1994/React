const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export default async (req, res) => {
  const {
    query: { limit, offset },
  } = req;

  const response = await fetch(`${apiUrl}?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .catch((error) => {
      res.status(500).json({
        status: "failed",
        message: "error occured while fetching all pokemons",
        error,
      });
    });

  const promises = response.results.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  );

  await Promise.allSettled(promises)
    .then((results) => {
      const rejected = results.filter((result) => result.status === "rejected");
      const fulfilled = results.filter(
        (result) => result.status === "fulfilled"
      );

      if (rejected.length > 0) {
        const error = rejected.map((rejectedResult) => rejectedResult.reason);
        res.status(500).json({
          status: "failed",
          message: "error occured while fetching specific pokemons",
          error,
        });
      }
      if (fulfilled.length > 0) {
        res.status(200).json({
          status: "success",
          data: fulfilled.map((fulfilledResult) => fulfilledResult.value),
        });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ status: "failed", message: "error occured", error });
    });

  res.end();
};
