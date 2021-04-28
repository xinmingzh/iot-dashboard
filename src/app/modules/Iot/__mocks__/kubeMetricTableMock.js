export default [
    {
        "id": "jetson-4",
        "nodeMetricsList": {
            "cpu": "1996711541n",
            "memory": "5453200Ki"
        },
        "podMetricsList": [
            {
                "metadata": {
                    "name": "mqtt-amqp-bridge-f4ccdb66-2k8xj",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "mqtt-amqp-bridge",
                        "usage": {
                            "cpu": "67387n",
                            "memory": "19940Ki"
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
                        "name": "ds",
                        "usage": {
                            "cpu": "572586239n",
                            "memory": "1013332Ki"
                        }
                    },
                    {
                        "name": "predictor",
                        "usage": {
                            "cpu": "874198046n",
                            "memory": "312784Ki"
                        }
                    },
                    {
                        "name": "horn",
                        "usage": {
                            "cpu": "2503333n",
                            "memory": "21924Ki"
                        }
                    },
                    {
                        "name": "brs",
                        "usage": {
                            "cpu": "2502859n",
                            "memory": "2362876Ki"
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
                            "cpu": "1341060n",
                            "memory": "22808Ki"
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
                            "cpu": "60255n",
                            "memory": "41692Ki"
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
                            "cpu": "2456675n",
                            "memory": "19304Ki"
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
                            "cpu": "9569107n",
                            "memory": "74388Ki"
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
                        "name": "lb-port-80",
                        "usage": {
                            "cpu": "0",
                            "memory": "1532Ki"
                        }
                    },
                    {
                        "name": "lb-port-443",
                        "usage": {
                            "cpu": "0",
                            "memory": "1060Ki"
                        }
                    }
                ]
            },
            {
                "metadata": {
                    "name": "model-sftp-97c6c9d75-jrp5b",
                    "namespace": "caper-apps"
                },
                "containers": [
                    {
                        "name": "model-sftp",
                        "usage": {
                            "cpu": "1820516n",
                            "memory": "56344Ki"
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
                            "cpu": "5652194n",
                            "memory": "35560Ki"
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
                            "cpu": "6282136n",
                            "memory": "28848Ki"
                        }
                    }
                ]
            }
        ],
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
                    "name": "mqtt-amqp-bridge",
                    "namespace": "caper-apps",
                    "generation": 1,
                    "labels": {
                        "app": "mqtt-amqp-bridge"
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
                            "lastUpdateTime": "2021-04-27T07:23:38Z",
                            "lastTransitionTime": "2021-04-27T07:23:38Z",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        },
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2021-04-27T07:23:38Z",
                            "lastTransitionTime": "2021-04-27T07:23:35Z",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"mqtt-amqp-bridge-f4ccdb66\" has successfully progressed."
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
                    "name": "cv-services",
                    "namespace": "caper-apps",
                    "generation": 18,
                    "labels": {
                        "app": "cv-services"
                    }
                },
                "status": {
                    "observedGeneration": 18,
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
                    "name": "mqtt-amqp-bridge-f4ccdb66-2k8xj",
                    "namespace": "caper-apps",
                    "labels": {
                        "app": "mqtt-amqp-bridge",
                        "pod-template-hash": "f4ccdb66"
                    }
                },
                "status": {
                    "phase": "Running",
                    "conditions": [
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:23:35Z"
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:23:38Z"
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:23:38Z"
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-04-27T07:23:35Z"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "name": "mqtt-amqp-bridge",
                            "state": {
                                "running": {
                                    "startedAt": "2021-04-27T07:23:37Z"
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
            }
        ]
    },
];
