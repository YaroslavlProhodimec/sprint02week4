import { app } from "./settings";
import * as dotenv from "dotenv";
import {runDB} from "./db";

dotenv.config();

app.get('/', (req, res) => {
    res.send('API is working!');
});

const startApp = async () => {
    await runDB();
    const port = process.env.PORT || 5001;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Запуск только если файл запущен напрямую
if (require.main === module) {
    startApp();
}

export default app;