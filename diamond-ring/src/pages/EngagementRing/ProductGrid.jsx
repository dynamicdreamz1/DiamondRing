import React, { useState } from 'react';
import { Heart, Info } from 'lucide-react';

const ProductGrid = ({ products }) => {
  const [wishlist, setWishlist] = useState([]);

  // Toggle wishlist function
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Render a single product card
  const renderProductCard = (product) => {
    const firstImage = product?.images?.edges[0]?.node;
    const availableVariants = product?.variants?.edges.filter(
      (variant) => variant.node.availableForSale
    );
    const firstVariant = availableVariants[0]?.node || product?.variants?.edges[0]?.node;

    if (!firstVariant) return null; // Skip if no variant is available

    const price = firstVariant.price?.amount || "0.00";
    const currencyCode = firstVariant.price?.currencyCode || "USD";
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(price);

    const isInWishlist = wishlist.includes(product.id);

    return (
      <div key={product.id} className="relative p-4 border rounded-lg shadow-sm">
        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute right-4 top-4 z-10 p-2 rounded-full ${
            isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-black"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={20} />
        </button>

        {/* Product Image */}
        <div className="mb-4">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.altText || product.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        {/* Product Title */}
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>

        {/* Product Price */}
        <p className="text-sm text-gray-600">
          {formattedPrice}
          {firstVariant.compareAtPrice && (
            <span className="ml-2 text-red-500 line-through">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: firstVariant.compareAtPrice.currencyCode,
              }).format(firstVariant.compareAtPrice.amount)}
            </span>
          )}
        </p>

        {/* Size Options */}
        {product.options?.[0]?.values && (
          <div className="mt-2 text-sm text-gray-600">
            <strong>Sizes: </strong>
            {product.options[0].values.join(", ")}
          </div>
        )}

        {/* More Info Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded">
          More Info
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(renderProductCard)}
    </div>
  );
};

export default ProductGrid;
