import { Kafka } from "kafkajs";
const csv = require('csv');
const fs = require('fs');


const kafka = new Kafka({
  brokers: ["localhost:9092"]
});

const producer = kafka.producer();

async function sendPayload(input: string) {
  try {
    await producer.send({
      topic: "delivery_details",
      messages: [{ value: input }],
    });
  } catch (e) {
    console.error("Caught Error while sending:", e);
  }
}

async function sendData(data : string)
{
	await producer.connect();
	try
	{
	    await sendPayload(data);
	    await producer.disconnect();
	}
	catch (e)
	{
	    console.error(e);
	}
}

async function main() 
{
  try 
  {
      fs.createReadStream('./data/data.csv')
      		.pipe(csv.parse())
        	.pipe(csv.stringify())
		.on('data', (data: string) => sendData(data.toString()));
  } 
  catch (e) 
  {
     console.error(e);
  }
}

main();
