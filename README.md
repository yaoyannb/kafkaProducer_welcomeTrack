How to start this producer

1-  install on your machine
	* docker 
	* nodejs
	* npm
	* node-typescript

2-  start thirdparty services using this docker compose https://drive.google.com/file/d/1nkAo2eFd7gfkjAVXKfp8vecA8oX7hznc/view?usp=sharing

	* download the file on your local machine 
	* run 
		- cd <download folder>
		- sudo docker-compose -f docker-compose.yml up -d

	* to stop all services run 
		- cd <download folder>
		- sudo docker-compose -f docker-compose.yml down

3-  checkout https://github.com/yaoyannb/kafkaProducer_welcomeTrack 

5-  create the topic delivery_details in kafka 
	* run 
		- sudo docker exec -ti kafka-broker bash 
		- cd /opt/bitnami/kafka/bin/
		- ./kafka-topics.sh \
            		--zookeeper zookeeper:2181 \
            		--create \
            		--topic delivery_details \
            		--partitions 1 \
            		--replication-factor 1
	
4-  start the producer
