export default async function(req, res) {
    try {
      if (req.method === "POST") {
        const { name } = req.body; 
  
        if (!name) {
          return res.status(400).json({ error: "name is required" });
        }
  
        return res.json({ message: `HELLO, ${name}! Welcome to Younglabs` });
      } else {
        return res.status(405).json({ error: "Method Not Allowed" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  