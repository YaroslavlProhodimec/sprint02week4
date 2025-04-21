import {runDB} from "./db";
import { MongoClient } from "mongodb";
import { app } from "./settings";
import * as dotenv from "dotenv";

dotenv.config();

// Обработка favicon
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.get('/favicon.png', (req, res) => {
    res.status(204).end();
});

app.get('/', (req, res) => {
    res.status(200).send('API is working!');
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

const startApp = async () => {
    try {
        await runDB();
        const port = process.env.PORT || 5001;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Запуск только если файл запущен напрямую
if (require.main === module) {
    startApp();
}

export default app;