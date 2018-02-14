rs.initiate(
    {   
      _id: "shardReplicaSet2",
      members: [
        { _id : 0, host : "192.168.99.100:27028" },
        { _id : 1, host : "192.168.99.100:27029" },
        { _id : 2, host : "192.168.99.100:27030" }
      ]
    }
)
