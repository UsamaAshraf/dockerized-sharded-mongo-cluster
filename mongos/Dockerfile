FROM mongo

# Define default command.
CMD ["mongos --configdb configReplicaSet/192.168.99.100:27019,192.168.99.100:27020,192.168.99.100:27021 --bind_ip 192.168.99.100"]

# Expose ports.
#   - 27017: process
EXPOSE 27017
