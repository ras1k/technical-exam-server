const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const services = [
    {
        id: 1,
        name: 'Door To Door Storage',
        description: 'We pickup, store & deliver',
        logo: "https://drive.google.com/uc?id=16g6Qlkd25fW752Z8Mh_OzS1xTALA303H"
    },
    {
        id: 2,
        name: 'Self access Storage',
        description: '24/7 Access Security Storage Unit',
        logo: "https://drive.google.com/uc?id=1C0wtU6ed7RI2GsOXliVUVvHNgYDAMS4y"
    },
    {
        id: 3,
        name: 'Document Storage',
        description: 'Store offsite & manAGE ONLINE',
        logo: "https://drive.google.com/uc?id=1rl9zrRMwljNlIb6aONVLsrNsFQVwGo1D"
    },
    {
        id: 4,
        name: 'Marketing Merchandise',
        description: 'Send swags to us and click for returns',
        logo: "https://drive.google.com/uc?id=1WgvKfJachhvVaLatDokLBHJwTpuFb6FV"
    },
    {
        id: 5,
        name: 'retail and e-Commerce',
        description: "We'll RTCRtpReceiver, store, pick, pack and ship",
        logo: "https://drive.google.com/uc?id=1wSxL2VpKYrfZ_W_WBP3uIJMIQIQRyedQ"
    },
    {
        id: 6,
        name: 'Co-Working and Co-Warehousing',
        description: 'Work, store, operate and ship all in one place',
        logo: "https://drive.google.com/uc?id=1wuEZmRtPDSNWMJqwK7lI3ArRdakv3xEN"

    },
    {
        id: 7,
        name: 'Office With Storage',
        description: 'Office space with storage space',
        logo: "https://drive.google.com/uc?id=1jTww3wOGhaFejQ5y9U75i9Qnz7tuTqes"
    },
];

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/services', (req, res) => {
    res.send(services)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})