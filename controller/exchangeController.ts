import { Request, Response } from 'express';
import axios from 'axios';

const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/`;

export const renderHome = async (req: Request, res: Response) => {
    res.render('index');
};

export const convertController = async (req: Request, res: Response) => {
    try {
        const { amount, fromCurrency, toCurrency } = req.body;
        const response = await axios.get(`${API_URL}${fromCurrency}`);
        const rate = response.data.conversion_rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

        res.render('result', { amount, fromCurrency, toCurrency, convertedAmount });
    } catch (error) {
        res.status(500).send('Error fetching exchange rates');
    }
};
