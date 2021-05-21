let date = new Date()
// date.setDate(date.getDate() - 100)
// date.setHours(date.getHours() - 1)
// date.setMinutes(date.getMinutes() - 1)

export default [
    {
        "id": "jetson-4",
        "updated": date.toISOString(),
        "nodeMetricsList": {
            "cpu": "2417534602n",
            "memory": "5363992Ki"
        },
        "podMetricsList": [
            {
                "metadata": {
                    "name": "model-sftp-97c6c9d75-jrp5b",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "model-sftp",
                        "usage": {
                            "cpu": "1789639n",
                            "memory": "48224Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "rabbitmq-cluster-operator-dbbfcf9f-lh45z",
                    "namespace": "rabbitmq-system"
                },
                "containers": [
                    {
                        "name": "operator",
                        "usage": {
                            "cpu": "5878563n",
                            "memory": "35Mi"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "coredns-854c77959c-mfpzb",
                    "namespace": "kube-system"
                },
                "containers": [
                    {
                        "name": "coredns",
                        "usage": {
                            "cpu": "6763796n",
                            "memory": "28368Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "local-path-provisioner-5ff76fc89d-xlq8c",
                    "namespace": "kube-system"
                },
                "containers": [
                    {
                        "name": "local-path-provisioner",
                        "usage": {
                            "cpu": "2533718n",
                            "memory": "17864Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "amqp-broker-server-0",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "rabbitmq",
                        "usage": {
                            "cpu": "53745520n",
                            "memory": "88908Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "svclb-traefik-dzncr",
                    "namespace": "kube-system"
                },
                "containers": [
                    {
                        "name": "lb-port-443",
                        "usage": {
                            "cpu": "0",
                            "memory": "1060Ki"
                        }
                    },
                    {
                        "name": "lb-port-80",
                        "usage": {
                            "cpu": "0",
                            "memory": "1512Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "metrics-server-86cbb8457f-nxsxp",
                    "namespace": "kube-system"
                },
                "containers": [
                    {
                        "name": "metrics-server",
                        "usage": {
                            "cpu": "6778018n",
                            "memory": "26328Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "controller-6b7687d974-rw9j9",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "controller",
                        "usage": {
                            "cpu": "154178n",
                            "memory": "51756Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "metrics-exporter-5579fb565b-bvh6q",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "metrics-exporter",
                        "usage": {
                            "cpu": "10862832n",
                            "memory": "56816Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "mqtt-amqp-bridge-88d48b6d7-n79pg",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "mqtt-amqp-bridge",
                        "usage": {
                            "cpu": "895071n",
                            "memory": "20000Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "cv-services-68598c86c9-jg2rs",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "horn",
                        "usage": {
                            "cpu": "2383986n",
                            "memory": "21596Ki"
                        }
                    },
                    {
                        "name": "brs",
                        "usage": {
                            "cpu": "2566484n",
                            "memory": "2200172Ki"
                        }
                    },
                    {
                        "name": "predictor",
                        "usage": {
                            "cpu": "869837937n",
                            "memory": "308632Ki"
                        }
                    },
                    {
                        "name": "ds",
                        "usage": {
                            "cpu": "552156789n",
                            "memory": "863476Ki"
                        }
                    }
                ]
            }
        ],
        "nodeList": {
            "cpu": "6",
            "memory": "7958068Ki"
        },
        "deploymentList": [
            {
                "metadata": {
                    "name": "controller",
                    "namespace": "caper-apps",
                    "generation": 1,
                    "labels": {
                        "app": "controller"
                    }
                },
                "status": {
                    "observedGeneration": 1,
                    "replicas": 1,
                    "updatedReplicas": 1,
                    "readyReplicas": 1,
                    "availableReplicas": 1,
                    "conditions": [
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:22:49Z",
                            "lastTransitionTime": "2021-04-27T07:22:49Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        },
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:22:49Z",
                            "lastTransitionTime": "2021-04-27T07:22:47Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"controller-6b7687d974\" has successfully progressed."
                        }
                    ]
                }
            },
            {
                "metadata": {
                    "name": "model-sftp",
                    "namespace": "caper-apps",
                    "generation": 2,
                    "labels": {
                        "app": "model-sftp"
                    }
                },
                "status": {
                    "observedGeneration": 2,
                    "replicas": 1,
                    "updatedReplicas": 1,
                    "readyReplicas": 1,
                    "availableReplicas": 1,
                    "conditions": [
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:23:03Z",
                            "lastTransitionTime": "2021-04-27T07:23:03Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        },
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:51:29Z",
                            "lastTransitionTime": "2021-04-27T07:23:01Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"model-sftp-97c6c9d75\" has successfully progressed."
                        }
                    ]
                }
            },
            {
                "metadata": {
                    "name": "metrics-exporter",
                    "namespace": "caper-apps",
                    "generation": 3,
                    "labels": {
                        "app": "metrics-exporter"
                    }
                },
                "status": {
                    "observedGeneration": 3,
                    "replicas": 1,
                    "updatedReplicas": 1,
                    "readyReplicas": 1,
                    "availableReplicas": 1,
                    "conditions": [
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-28T09:38:40Z",
                            "lastTransitionTime": "2021-04-28T09:35:15Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"metrics-exporter-5579fb565b\" has successfully progressed."
                        },
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2021-04-28T09:54:01Z",
                            "lastTransitionTime": "2021-04-28T09:54:01Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        }
                    ]
                }
            },
            {
                "metadata": {
                    "name": "mqtt-amqp-bridge",
                    "namespace": "caper-apps",
                    "generation": 3,
                    "labels": {
                        "app": "mqtt-amqp-bridge"
                    }
                },
                "status": {
                    "observedGeneration": 3,
                    "replicas": 1,
                    "updatedReplicas": 1,
                    "readyReplicas": 1,
                    "availableReplicas": 1,
                    "conditions": [
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-28T11:21:54Z",
                            "lastTransitionTime": "2021-04-27T07:23:35Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"mqtt-amqp-bridge-88d48b6d7\" has successfully progressed."
                        },
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2021-04-28T13:19:30Z",
                            "lastTransitionTime": "2021-04-28T13:19:30Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        }
                    ]
                }
            },
            {
                "metadata": {
                    "name": "cv-services",
                    "namespace": "caper-apps",
                    "generation": 73,
                    "labels": {
                        "app": "cv-services"
                    }
                },
                "status": {
                    "observedGeneration": 73,
                    "replicas": 1,
                    "updatedReplicas": 1,
                    "readyReplicas": 1,
                    "availableReplicas": 1,
                    "conditions": [
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:53:20Z",
                            "lastTransitionTime": "2021-04-27T07:51:06Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"cv-services-68598c86c9\" has successfully progressed."
                        },
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2021-04-28T07:54:17Z",
                            "lastTransitionTime": "2021-04-28T07:54:17Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        }
                    ]
                }
            }
        ],
        "podList": [
            {
                "metadata": {
                    "name": "amqp-broker-server-0",
                    "namespace": "caper-apps",
                    "labels": {
                        "app.kubernetes.io/component": "rabbitmq",
                        "app.kubernetes.io/name": "amqp-broker",
                        "app.kubernetes.io/part-of": "rabbitmq",
                        "controller-revision-hash": "amqp-broker-server-67dc797bdb",
                        "statefulset.kubernetes.io/pod-name": "amqp-broker-server-0"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T06:55:47Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T06:57:38Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T06:57:38Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T06:55:42Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "rabbitmq",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-27T06:55:48Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        }
                    ],
                    "qosClass": "Burstable"
                }
            },
            {
                "metadata": {
                    "name": "controller-6b7687d974-rw9j9",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "controller",
                        "pod-template-hash": "6b7687d974"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:22:47Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:22:49Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:22:49Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:22:47Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "controller",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-27T07:22:49Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        }
                    ],
                    "qosClass": "BestEffort"
                }
            },
            {
                "metadata": {
                    "name": "model-sftp-97c6c9d75-jrp5b",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "model-sftp",
                        "pod-template-hash": "97c6c9d75"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:51:26Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:51:29Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:51:29Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:51:26Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "model-sftp",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-27T07:51:28Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        }
                    ],
                    "qosClass": "BestEffort"
                }
            },
            {
                "metadata": {
                    "name": "cv-services-68598c86c9-jg2rs",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "cv-services",
                        "pod-template-hash": "68598c86c9"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T07:53:59Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T07:54:17Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T07:54:17Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T07:53:45Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "brs",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T07:54:03Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        },
                        {
                            "name": "ds",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T07:54:05Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        },
                        {
                            "name": "horn",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T07:54:06Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        },
                        {
                            "name": "predictor",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T07:54:16Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 1
                        }
                    ],
                    "qosClass": "BestEffort"
                }
            },
            {
                "metadata": {
                    "name": "metrics-exporter-5579fb565b-bvh6q",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "metrics-exporter",
                        "pod-template-hash": "5579fb565b"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T09:53:51Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T09:54:01Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T09:54:01Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T09:53:51Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "metrics-exporter",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T09:54:00Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        }
                    ],
                    "qosClass": "BestEffort"
                }
            },
            {
                "metadata": {
                    "name": "mqtt-amqp-bridge-88d48b6d7-n79pg",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "mqtt-amqp-bridge",
                        "pod-template-hash": "88d48b6d7"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T13:19:05Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T13:19:30Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T13:19:30Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-28T13:19:05Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "mqtt-amqp-bridge",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-28T13:19:29Z"
                                }
                            },
                            "ready": true,
                            "restartCount": 0
                        }
                    ],
                    "qosClass": "BestEffort"
                }
            }
        ]
    },
];
