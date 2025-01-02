import React from 'react'
import { Drawer } from '@mui/material';


const CheckoutDrawer = ({ isOpen, setIsOpen }) => {
    const price = 2270;

    if (!isOpen) {
        return null;
    }
    
    return (
        <Drawer anchor="right" open={isOpen} >
            <div className="">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-2">
                            <h2 className="font-medium">My Shopping Bag</h2>
                            <span className="text-sm text-gray-500">1 Item</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-auto p-4">
                        <div className="relative bg-white border rounded-lg p-4">
                            <button
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Add to wishlist"
                            >
                                ♡
                            </button>
                            <img
                                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400"
                                alt="Diamond Ring"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="font-medium mb-4">
                                The Lexie Set With A 2 Carat Round Lab Diamond
                            </h3>

                            <div className="mb-4">
                                <button className="w-full p-3 border rounded-lg text-left flex justify-between items-center">
                                    <span className="text-gray-700">Select Ring Size</span>
                                    <span>+</span>
                                </button>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-700">Total:</span>
                                <span className="font-medium">${price.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t p-4">
                        <div className="mb-4">
                            <button className="w-full p-3 border rounded-lg text-left flex justify-between items-center">
                                <span className="text-gray-700">Discount Code</span>
                                <span>+</span>
                            </button>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-700">Total:</span>
                            <span className="font-medium">${price.toLocaleString()}</span>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-lg mb-4">
                            Checkout Now
                        </button>

                        <div className="text-xs text-gray-500 space-y-2">
                            <div className="flex items-center gap-2 justify-center">
                                <span>Free Insured Shipping</span>
                                <span>•</span>
                                <span>30 days Free Returns & Exchange</span>
                            </div>
                            <div className="flex justify-center gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6" />
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-6" />
                                <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="PayPal" className="h-6" />
                                {/* <img src="https://cdn-icons-png.flaticon.com/128/5968/5968217.png" alt="Shopify" className="h-6" /> */}
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968155.png" alt="Klarna" className="h-6" />
                            </div>
                            <p className="text-center">Safe Checkout Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

export default CheckoutDrawer