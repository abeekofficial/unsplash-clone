import React from "react";
//Components
import Images from "../../components/Images";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const LikedImages = () => {
  const { likedImages } = useGlobalContext();
  console.log("Liked Images:", likedImages);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry>
          {likedImages.length > 0 &&
            likedImages.map((image) => {
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
    </>
  );
};

export default LikedImages;
