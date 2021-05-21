import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import * as actions from "../../../_redux/kube-metrics/kubeMetricsActions";
import {Grid} from "@material-ui/core";
import {Badge, ListGroup} from "react-bootstrap";

export function KubeMetrics(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchKubeMetric(props.thingId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.thingId]);

    const { currentState } = useSelector(
        (state) => ({ currentState: state.kubeMetrics }),
        shallowEqual
    );
    const { kubeMetric } = currentState;

    const parseCpuUsage = usage => parseInt(usage.slice(0, -1)) / 1e9
    const parseMemUsage = usage => parseInt(usage.slice(0, -2))
    const getUsage = (podId, containerId) => {
        let podMetric = kubeMetric.podMetricsList?.filter(podMetric => podMetric.metadata.name === podId)
        podMetric = podMetric ? podMetric[0] : undefined
        let res = podMetric?.containers?.filter(container => container.name === containerId)
        return res ? res[0].usage : undefined
    }
    const getCpuPercent = cpu_usage => cpu_usage ? parseCpuUsage(cpu_usage) / parseInt(kubeMetric.nodeList?.cpu) * 100 : NaN
    const getMemPercent = mem_usage => mem_usage ? parseMemUsage(mem_usage) / parseMemUsage(kubeMetric.nodeList?.memory) * 100 : NaN

    function getConditions(dep) {
        return dep.status.conditions.filter(cond => cond.status === "True").map(cond => cond.type).sort()
    }

    const [timeDiff, setTimeDiff] = useState(0)
    const [color, setColor] = useState("green")

    const calculateTimeDiff = time => Date.now() - Date.parse(time)

    const calculateColor = timeDiff => timeDiff < 20*1000 ? "green" : "red"

    useEffect(() => {
        if (kubeMetric.updated === undefined) return
        setInterval(() => {
            setTimeDiff(calculateTimeDiff(kubeMetric.updated))
        }, 1000)
    }, [kubeMetric])

    useEffect(() => {
        setColor(calculateColor(timeDiff))
    }, [timeDiff])

    const parseTimeDiff = toDisplay => {
        if (toDisplay === undefined || isNaN(toDisplay) || parseInt(toDisplay) <= 0) return ""
        let curr = parseInt(toDisplay) / 1000
        let parsed = []
        if (Math.floor(curr/(24*60*60))) {
            parsed.push(Math.floor(curr/(24*60*60)).toString() + 'd')
            curr = curr % (24*60*60)
        }
        if (Math.floor(curr/(60*60))) {
            parsed.push(Math.floor(curr/(60*60)).toString() + 'h')
            curr = curr % (60*60)
        }
        if (Math.floor(curr/(60))) {
            parsed.push(Math.floor(curr/(60)).toString() + 'm')
        }
        if (parsed.length > 0) return parsed.join(" ")
        return Math.floor(curr).toString() + 's'
    }

    const displayTimeDiff = toDisplay => {
        let parsed = parseTimeDiff(toDisplay)
        return parsed ? `updated ${parsed} ago` : ""
    }

    const style = {"color": color}

    return (
        <>
            <Grid container spacing={3} alignItems="baseline">
                <Grid item>
                    <ListGroup horizontal className="h1">
                        <ListGroup.Item variant="secondary">CPU</ListGroup.Item>
                        <ListGroup.Item>{getCpuPercent(kubeMetric.nodeMetricsList?.cpu).toFixed(0)}%</ListGroup.Item>
                    </ListGroup>
                </Grid>
                <Grid item>
                    <ListGroup horizontal className="h1">
                        <ListGroup.Item variant="secondary">MEM</ListGroup.Item>
                        <ListGroup.Item>{getMemPercent(kubeMetric.nodeMetricsList?.memory).toFixed(0)}%</ListGroup.Item>
                    </ListGroup>
                </Grid>
                <Grid item>
                    {timeDiff > 0 && <code className="h6" style={style}>{displayTimeDiff(timeDiff)}</code>}
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xl={6}>
                    <ListGroup>
                        <ListGroup.Item className="h1">Deployments</ListGroup.Item>
                        {kubeMetric.deploymentList?.map(dep => (
                            <ListGroup.Item key={dep.metadata.name}>
                                <h4>{dep.metadata.name}
                                    {getConditions(dep).map(cond => (
                                        <Badge variant="success" className="ml-2">{cond}</Badge>
                                    ))}
                                </h4>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Grid>
                <Grid item>
                    <ListGroup>
                        <ListGroup.Item className="h1">Pods</ListGroup.Item>
                        {kubeMetric.podList?.map(pod => (
                            <ListGroup.Item key={pod.metadata.name}>
                                <h5>{pod.metadata?.name}
                                    <Badge variant="success" className="ml-4">{pod.status?.phase}</Badge></h5>
                                <ListGroup>
                                    {pod.status?.containerStatuses?.map(container => (
                                        <ListGroup.Item key={container.name}>
                                            <h6>{container.name}
                                                <Badge hidden={false} variant="success" className="ml-4">ready</Badge>
                                                {Object.keys(container.state).map(state => (
                                                    <Badge key={state} variant="success" className="ml-2">{state}</Badge>
                                                ))}
                                                <Badge variant="info" className="ml-2">
                                                    CPU {getCpuPercent(getUsage(pod.metadata.name, container.name)?.cpu).toFixed(0)}%
                                                </Badge>
                                                <Badge variant="info" className="ml-2">
                                                    MEM {getMemPercent(getUsage(pod.metadata.name, container.name)?.memory).toFixed(0)}%
                                                </Badge>
                                            </h6>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Grid>
            </Grid>
        </>
    )
}
