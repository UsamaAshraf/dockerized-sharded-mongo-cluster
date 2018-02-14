rs.initiate(
    {   
      _id: "shardReplicaSet1",
      members: [
        { _id : 0, host : "192.168.99.100:27025" },
        { _id : 1, host : "192.168.99.100:27026" },
        { _id : 2, host : "192.168.99.100:27027" }
      ]
    }
)
