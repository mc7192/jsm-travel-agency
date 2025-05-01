export { default as NavItems } from "./NavItems";
export { default as MobileSidebar } from "./MobileSidebar";
export { default as Header } from "./Header";
export { default as StatsCard } from "./StatsCard";
export { default as TripCard } from "./TripCard";
import {formatDate} from "../lib/util";

export const allTrips = [{
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
},
    {
        id: 2,
        name: "French Reverie",
        imageUrls: ["/assets/images/sample2.jpg"],
        itinerary: [{ location: "Paris" }],
        tags: ["Relaxation", "Culinary"],
        travelStyle: "Family",
        estimatedPrice: "$2,000",
    },
    {
        id: 3,
        name: "Zen Break",
        imageUrls: ["/assets/images/sample3.jpg"],
        itinerary: [{ location: "Japan" }],
        tags: ["Shopping", "Luxury"],
        travelStyle: "Couple",
        estimatedPrice: "$3,000",
    },
    {
        id: 4,
        name: "Adventure in Westeros",
        imageUrls: ["/assets/images/sample4.jpg"],
        itinerary: [{ location: "Croatia" }],
        tags: ["Historical", "Culture"],
        travelStyle: "Friends",
        estimatedPrice: "$4,000",
    },
];
export const user = { name: "Michael", email: "michael@example.com" };
export const dashboardStats = {
    totalUsers: 123450,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 22, lastMonth: 276 },
    userRole: { total: 62, currentMonth: 76, lastMonth: 726 },
};

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-01"),
        itineraryCreated: 10,
        status: "user",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-02"),
        itineraryCreated: 4,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "admin",
    },
];