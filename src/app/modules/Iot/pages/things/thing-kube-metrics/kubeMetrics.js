import React, {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import * as actions from "../../../_redux/kube-metrics/kubeMetricsActions";
import {Card, CardBody, CardHeader} from "../../../../../../_metronic/_partials/controls";
import {Grid} from "@material-ui/core";

export function KubeMetrics(props) {
    const { currentState } = useSelector(
        (state) => ({ currentState: state.kubeMetrics }),
        shallowEqual
    );
    const { kubeMetric } = currentState;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchKubeMetric(props.thingId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.thingId]);

    return (
        <Grid container spacing={3}>
            <Grid item lg={12} xl={12}>
                <Card>
                    <CardHeader title="NodeMetrics"/>
                    <CardBody>
                        <pre>{JSON.stringify(kubeMetric.nodeMetricsList, null, 2)}</pre>
                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={6} xl={4}>
                <Card>
                    <CardHeader title="Deployments"/>
                    <CardBody>
                        <pre>{JSON.stringify(kubeMetric.deploymentList, null, 2)}</pre>
                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={6} xl={4}>
                <Card>
                    <CardHeader title="Pods"/>
                    <CardBody>
                        <pre>{JSON.stringify(kubeMetric.podList, null, 2)}</pre>
                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={6} xl={4}>
                <Card>
                    <CardHeader title="PodMetrics"/>
                    <CardBody>
                        <pre>{JSON.stringify(kubeMetric.podMetricsList, null, 2)}</pre>
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
    )
}
