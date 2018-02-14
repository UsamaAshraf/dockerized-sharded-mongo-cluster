FROM mongo

# Define working directory.
WORKDIR /data/db

# Define default command.
CMD ["mongod --shardsvr --replSet 'shardReplicaSet1'  --dbpath /data/db --bind_ip 192.168.99.100"]

# Expose ports.
#   - 27017: process
EXPOSE 27017
