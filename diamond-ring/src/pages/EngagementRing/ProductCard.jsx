import { useState } from 'react';
import { Heart } from 'react-feather';

const ProductCard = ({ node }) => {
    console.log("node",node);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const images = node?.images?.edges;
  const variants = node?.variants?.edges;

  const handleImageHover = (index) => {
    setSelectedImage(index);
  };

  const handleVariantClick = (index) => {
    setSelectedVariant(index);
  };

  const firstVariant = variants[selectedVariant]?.node;
  const price = firstVariant?.price?.amount || "0.00";
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: firstVariant?.price?.currencyCode || "USD",
  }).format(price);

  const compareAtPrice = firstVariant?.compareAtPrice;
  const formattedCompareAtPrice = compareAtPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: firstVariant?.price?.currencyCode || "USD",
      }).format(compareAtPrice)
    : null;

  return (
    <div className="border border-gray-200 rounded-lg p-4 relative group">
      <button
        className="absolute right-4 top-4 z-[9] transition-colors duration-200 ease-in-out"
        aria-label="Add to wishlist"
      >
        <Heart className="h-6 w-6 text-gray-400 group-hover:text-red-500" />
      </button>

      <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
        <div className="flex flex-row justify-between items-center h-full">
          <button
            // className="bg-white rounded-full p-2 shadow-md mr-2 z-10 transition-colors duration-200 ease-in-out hover:bg-gray-100"
            onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
          >
            {/* <ArrowLeft className="h-6 w-6 text-gray-500" /> */}
          </button>

          {images.map((image, index) => (
            <img
              key={image.node.id}
              src={image.node.src}
              alt={image.node.altText || node.title}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                index === selectedImage ? 'block' : 'hidden'
              }`}
              onMouseEnter={() => handleImageHover(index)}
            />
          ))}

          <button
            className="bg-white rounded-full p-2 shadow-md ml-2 z-10 transition-colors duration-200 ease-in-out hover:bg-gray-100"
            onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
          >
            {/* <ArrowRight className="h-6 w-6 text-gray-500" /> */}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold truncate">{node.title}</h3>
        <div className="flex items-center space-x-2">
          <p className="text-gray-900 font-medium">{formattedPrice}</p>
          {compareAtPrice && (
            <p className="text-sm line-through text-gray-500">
              {formattedCompareAtPrice}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {variants.map((variant, index) => (
            <button
              key={variant.node.id}
              className={`px-3 py-1 rounded-md transition-colors duration-200 ease-in-out ${
                index === selectedVariant
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleVariantClick(index)}
            >
              {variant.node.title}
            </button>
          ))}
        </div>

        <button className="mt-2 bg-black text-white rounded-md py-2 px-4 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;