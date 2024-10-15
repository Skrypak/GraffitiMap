import { NextApiRequest, NextApiResponse } from 'next';
import { fetchLocation } from "@/db/Placeholder/fetchFunctions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Ваш код для обробки GET та POST запитів
        // Наприклад:
        if (req.method === 'GET') {
            const locationData = await fetchLocation(); // Assuming fetchLocation returns the needed data
            res.status(200).json(locationData);
        } else if (req.method === 'POST') {
            // Ваш код для обробки POST запиту
            // You can call fetchLocation again or handle differently based on your needs
        }
    } catch (error) {
        console.error('Fetch Location Error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}