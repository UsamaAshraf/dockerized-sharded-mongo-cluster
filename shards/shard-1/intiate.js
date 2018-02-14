rs.initiate(
    {   
      _id: "shardReplicaSet0",
      members: [
        { _id : 0, host : "192.168.99.100:27022" },
        { _id : 1, host : "192.168.99.100:27023" },
        { _id : 2, host : "192.168.99.100:27024" }
      ]
    }
)
