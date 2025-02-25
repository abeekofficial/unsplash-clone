import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
// custom hook
import { useGlobalContext } from "../../hooks/useGlobalContext";
import useFetch from "../../hooks/useFetch";
// Masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Images } from "../../components";

const Home = () => {
  const { dispatch, images } = useGlobalContext();
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_UNSPLASH_URL}?client_id=${
      import.meta.env.VITE_UNSPLASH_KEY
    }&query=car&page=${pageNumber}`
  );

  useEffect(() => {
    if (data) {
      dispatch({ type: "ADD_IMAGES", payload: data.results });
    }
  }, [data, dispatch]);

  return (
    <Box>
      {loading ? <h1>Loading...</h1> : ""}
      {error && <h1>Something went wrong...</h1>}

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry>
          {images.length > 0 &&
            images.map((image) => {
              console.log("Image", image);
              const { id, user, alt_description, links, urls } = image;
              return (
                <Images
                  key={id}
                  user={user}
                  description={alt_description}
                  links={links}
                  urls={urls}
                  image={image}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>

      <Button
        onClick={() => setPageNumber(pageNumber + 1)}
        fullWidth
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Load More
      </Button>
    </Box>
  );
};

export default Home;
