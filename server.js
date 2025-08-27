const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio_messages', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Message Schema
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);

// API endpoint to save message
app.post('/api/messages', async (req, res) => {
    try {
        const msg = new Message(req.body);
        await msg.save();
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// API endpoint to get all messages
app.get('/api/messages', async (req, res) => {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));