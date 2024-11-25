import { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart } from 'react-feather';

const ProductCard = ({ node }) => {
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
    <div className="border border-gray-200 rounded-lg p-4 relative group product-detail-main-boxes">
      <button
        className="absolute right-6 top-6 z-[9] transition-colors duration-200 ease-in-out"
        aria-label="Add to wishlist"
      >
        <Heart className="h-6 w-6 text-gray-400 group-hover:text-red-500" />
      </button>
      <div class="hidden z-[1] bg-white  md:block absolute  -top-5 -left-5 -right-5 xl:-top-6 xl:-left-6 xl:-right-6 border-2 border-black rounded-4xl shadow-[0px_6px_20px_0_#00000060] -bottom-48"></div>
      <div className="relative  aspect-square mb-4 overflow-hidden rounded-md ">
        <div className="flex flex-row justify-between items-center h-full">

          <div className="arrow-main flex justify-center items-center gap-2">
            {/* Left Arrow */}
            {images.length > 1 && (
              <button
                onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                className="left-arrow text-customGray-500 bg-customGray-75 p-1 rounded-full shrink-0 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 text-gray-500" />
              </button>
            )}

            {/* Image Index and Total Count */}
            <button
              type="button"
              className="flex items-center gap-0.5 p-0.5 rounded-full text-1.5xs leading-none bg-customGray-75 text-customGray-500"
            >
              <div className="h-4 w-4 rounded-full bg-white overflow-hidden">
                <div className="transition-all duration-500" data-item-indicators-container="true">
                  <div className="relative pt-[100%] w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {selectedImage + 1}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-4 w-4">
                <div className="relative pt-[100%] w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {images.length}
                  </div>
                </div>
              </div>
            </button>

            {/* Right Arrow */}
            {images.length > 1 && (
              <button
                onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                className="right-arrow ml-2 text-customGray-500 bg-customGray-75 rounded-full shrink-0 p-1 flex items-center justify-center"
              >
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>


          <div className='mb-5'>

            {images.map((image, index) => (
              <img
                key={image.node.id}
                src={image.node.src}
                alt={image.node.altText || node.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${index === selectedImage ? 'block' : 'hidden'
                  }`}
                onMouseEnter={() => handleImageHover(index)}
              />
            ))}
          </div>
        </div>
      </div>



      <div className="space-y-2 product-des-box md:absolute md:invisible md:w-full md:z-10">
        <div className="flex items-center space-x-2 justify-between">
          <div>
            <h3 className="text-lg text-sm font-semibold truncate">{node.title}</h3>
            <div className="flex text-sm items-center space-x-2">
              <p className="text-gray-900 font-medium">{formattedPrice}</p>
              {compareAtPrice && (
                <p className="text-sm line-through text-gray-500">
                  {formattedCompareAtPrice}
                </p>
              )}
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3 ">
            <button type="button" className="p-0 border-0 cursor-pointer" aria-label="14k White Gold">
              <div className="rounded-full w-4 h-4 relative" data-metal-color="14k White Gold">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
            </button>
            <button type="button" className="p-0 border-0 cursor-pointer" aria-label="14k Yellow Gold">
              <div className="rounded-full w-4 h-4 relative" data-metal-color="14k Yellow Gold"></div>
            </button>
            <button type="button" className="p-0 border-0 cursor-pointer" aria-label="14k Rose Gold">
              <div className="rounded-full w-4 h-4 relative" data-metal-color="14k Rose Gold"></div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center space-x-2 py-3">
          <a href="/ring-select/ring-detail-page" className="rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 px-6 text-center  flex justify-center items-center border-2 border-black" aria-hidden="false">More Info</a>
          <a href="" className="rounded-full text-sm font-semibold leading-tight text-white p-3 px-6 text-center  flex justify-center items-center border-2 border-black bg-black" aria-hidden="false">Complete your ring</a>
        </div>

        <div className="flex items-center space-x-2">
          {variants.map((variant, index) => (
            <button
              key={variant.node.id}
              className={`px-3 py-1 rounded-md transition-colors duration-200 ease-in-out ${index === selectedVariant
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              onClick={() => handleVariantClick(index)}
            >
              {variant.node.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;