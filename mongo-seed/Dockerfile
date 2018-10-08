FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db pmhealth --collection sggmaps --type json --file /init.json