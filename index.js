import express from 'express';


const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json({
    "status": true,
    "data":
      [
        {
          "id": "1",
          "name": "John"
        },
        {
          "id": "2",
          "name": "Jane"
        },
        {
          "id": "3",
          "name": "Alice"
        },
        {
          "id": "4",
          "name": "Bob"
        },
        {
          "id": "5",
          "name": "Eve"
        },
        {
          "id": "6",
          "name": "Mike"
        },
        {
          "id": "7",
          "name": "Sarah"
        },
        {
          "id": "8",
          "name": "David"
        },
        {
          "id": "9",
          "name": "Emily"
        },
        {
          "id": "10",
          "name": "Tom"
        },
        {
          "id": "11",
          "name": "Olivia"
        },
        {
          "id": "12",
          "name": "Chris"
        },
        {
          "id": "13",
          "name": "Samantha"
        },
        {
          "id": "14",
          "name": "Daniel"
        },
        {
          "id": "15",
          "name": "Lily"
        },
        {
          "id": "16",
          "name": "Alex"
        },
        {
          "id": "17",
          "name": "Grace"
        },
        {
          "id": "18",
          "name": "Peter"
        },
        {
          "id": "19",
          "name": "Sophia"
        },
        {
          "id": "20",
          "name": "Ryan"
        },
        {
          "id": "21",
          "name": "Lucy"
        },
        {
          "id": "22",
          "name": "Michael"
        },
        {
          "id": "23",
          "name": "Emma"
        },
        {
          "id": "24",
          "name": "Josh"
        },
        {
          "id": "25",
          "name": "Ava"
        },
        {
          "id": "26",
          "name": "Kevin"
        },
        {
          "id": "27",
          "name": "Chloe"
        },
        {
          "id": "28",
          "name": "Patrick"
        },
        {
          "id": "29",
          "name": "Mia"
        },
        {
          "id": "30",
          "name": "Jason"
        },
        {
          "id": "31",
          "name": "Zoe"
        },
        {
          "id": "32",
          "name": "Sam"
        },
        {
          "id": "33",
          "name": "Victoria"
        },
        {
          "id": "34",
          "name": "Eric"
        },
        {
          "id": "35",
          "name": "Nora"
        },
        {
          "id": "36",
          "name": "William"
        },
        {
          "id": "37",
          "name": "Amy"
        },
        {
          "id": "38",
          "name": "Robert"
        },
        {
          "id": "39",
          "name": "Hannah"
        },
        {
          "id": "40",
          "name": "Mark"
        },
        {
          "id": "41",
          "name": "Grace"
        },
        {
          "id": "42",
          "name": "Andrew"
        },
        {
          "id": "43",
          "name": "Rachel"
        },
        {
          "id": "44",
          "name": "Steven"
        },
        {
          "id": "45",
          "name": "Leah"
        },
        {
          "id": "46",
          "name": "Jacob"
        },
        {
          "id": "47",
          "name": "Lily"
        },
        {
          "id": "48",
          "name": "Matthew"
        },
        {
          "id": "49",
          "name": "Sophie"
        },
        {
          "id": "50",
          "name": "Nathan"
        }
      ]
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
