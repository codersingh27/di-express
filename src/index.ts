import app from "./app";
import * as db from "./database";

const PORT = process.env.PORT || 8082;
db.connectt().then(() => {
    app.listen(PORT, async () => {
        console.log(`Server is running http://localhost:${PORT}`);
    });
    
}).catch((e) => {
    console.log(`Db Error: ${e.message}`)
})

