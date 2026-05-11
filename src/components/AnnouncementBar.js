import React, { useState, useEffect } from 'react';
import { X, Sparkles, Truck, Tag } from 'lucide-react';
import './CSS/AnnouncementBar.css';

const announcements = [
    { icon: Truck, text: 'Free shipping on orders above ₹499' },
    { icon: Tag, text: 'Use code FIRST10 for 10% off your first order!' },
    { icon: Sparkles, text: 'New 2024 Collection now available' }
];

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    const current = announcements[index];
    const Icon = current.icon;

    return (
        <div className="announcement-bar-premium">
            <div className="announcement-track">
                <div key={index} className="announcement-item">
                    <Icon size={14} className="announcement-icon" />
                    <span className="announce-text-premium">
                        {current.text}
                    </span>
                </div>
            </div>
            <button
                className="announce-close-premium"
                onClick={() => setIsVisible(false)}
                aria-label="Dismiss"
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default AnnouncementBar;
