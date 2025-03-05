import expres from 'express'; // import express for API implementation

const router = expres.Router(); // Create a router object

router.get("/test", (req, res) => {
    res.send("test route");
});

export default router; // Export the router object