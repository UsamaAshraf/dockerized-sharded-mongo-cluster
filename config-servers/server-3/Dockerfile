#
# MongoDB Dockerfile
#
# https://github.com/dockerfile/mongodb
#

# Pull base image.
FROM mongo

# Define working directory.
WORKDIR /data/configdb

# Define default command.
CMD ["mongod --configsvr --replSet 'configReplicaSet' --dbpath /data/configdb --bind_ip 192.168.99.100 --port 27019"]

# Expose ports.
#   - 27017: process
EXPOSE 27019
