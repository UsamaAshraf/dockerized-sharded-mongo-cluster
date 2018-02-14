rs.initiate(
    {   
      _id: "configReplicaSet",
      configsvr: true,
      members: [
        { _id : 0, host : "192.168.99.100:27019" },
        { _id : 1, host : "192.168.99.100:27020" },
        { _id : 2, host : "192.168.99.100:27021" }
      ]
    }
)
