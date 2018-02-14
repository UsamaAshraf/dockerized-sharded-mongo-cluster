sh.addShard("shardReplicaSet0/192.168.99.100:27022,192.168.99.100:27023,192.168.99.100:27024")
sh.addShard("shardReplicaSet1/192.168.99.100:27025,192.168.99.100:27026,192.168.99.100:27027")
sh.addShard("shardReplicaSet2/192.168.99.100:27028,192.168.99.100:27029,192.168.99.100:27030")

sh.enableSharding("<database>")

sh.shardCollection("<database>.<collection>", { "field_name" : 1 } )
sh.shardCollection("<database>.<collection>", { "field_name" : 1 } )
sh.shardCollection("<database>.<collection>", { "field_name" : 1 } )
sh.shardCollection("<database>.<collection>", { "field_name" : 1 } )
