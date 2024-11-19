import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';

const RingSelector = () => {
  const ringStyles = [
    { id: 1, name: 'Solitaire', icon: '💍' },
    { id: 2, name: 'Pave', icon: '💍' },
    { id: 3, name: 'Halo', icon: '💍' },
    { id: 4, name: 'Nature', icon: '💍' },
    { id: 5, name: 'Hidden Halo', icon: '💍' },
    { id: 6, name: 'Side Stone', icon: '💍' },
    { id: 7, name: 'Three Stone', icon: '💍' },
    { id: 8, name: 'Vintage', icon: '💍' },
  ];

  const rings = [
    { id: 1, name: 'Classic Solitaire Ring', price: '2,499', image: '/api/placeholder/300/300' },
    { id: 2, name: 'Elegant Pave Ring', price: '2,899', image: '/api/placeholder/300/300' },
    { id: 3, name: 'Vintage Halo Ring', price: '3,299', image: '/api/placeholder/300/300' },
    { id: 4, name: 'Nature Inspired Ring', price: '2,799', image: '/api/placeholder/300/300' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>

      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="SEARCH..."
                className="w-full pl-3 pr-10 py-2 border rounded-md"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <h1 className="text-3xl font-semibold">KEYZAR</h1>
            
            <div className="flex items-center gap-4">
              <User className="h-6 w-6" />
              <ShoppingBag className="h-6 w-6" />
            </div>
          </div>
          
          {/* Menu */}
          <nav className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-gray-600">FINE JEWELRY</a>
            <a href="#" className="hover:text-gray-600">ENGAGEMENT RINGS</a>
            <a href="#" className="hover:text-gray-600">WEDDING BANDS</a>
            <a href="#" className="hover:text-gray-600">DIAMONDS</a>
            <a href="#" className="hover:text-gray-600">GEMSTONES</a>
            <a href="#" className="hover:text-gray-600">EDUCATION</a>
          </nav>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center">
            <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
            <div className="ml-2">
              <div className="text-sm text-gray-500">Select your</div>
              <div className="font-semibold">SETTING</div>
            </div>
          </div>
          <div className="h-px bg-gray-300 flex-1 mx-4"></div>
          <div className="flex items-center opacity-50">
            <div className="border-2 rounded-full w-8 h-8 flex items-center justify-center">2</div>
            <div className="ml-2">
              <div className="text-sm text-gray-500">Select your</div>
              <div className="font-semibold">STONE</div>
            </div>
          </div>
          <div className="h-px bg-gray-300 flex-1 mx-4"></div>
          <div className="flex items-center opacity-50">
            <div className="border-2 rounded-full w-8 h-8 flex items-center justify-center">3</div>
            <div className="ml-2">
              <div className="text-sm text-gray-500">Complete your</div>
              <div className="font-semibold">RING</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ring Styles */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-4">Engagement Rings</h2>
        <p className="text-center text-gray-600 mb-8">
          Discover our collection of made to order engagement rings and customize it to your preference
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
          {ringStyles.map((style) => (
            <div key={style.id} className="text-center">
              <div className="border rounded-lg p-4 mb-2">
                {style.icon}
              </div>
              <div className="text-sm">{style.name}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <select className="border rounded-md px-4 py-2">
            <option>Select Metal</option>
          </select>
          <select className="border rounded-md px-4 py-2">
            <option>Select Shape</option>
          </select>
          <select className="border rounded-md px-4 py-2 ml-auto">
            <option>Price (low-to-high)</option>
          </select>
        </div>

        {/* Ring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rings.map((ring) => (
            <div key={ring.id} className="border rounded-lg p-4 relative">
              <Heart className="absolute right-4 top-4 h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
              <img src={ring.image} alt={ring.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{ring.name}</h3>
              <p className="text-gray-600">${ring.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RingSelector;