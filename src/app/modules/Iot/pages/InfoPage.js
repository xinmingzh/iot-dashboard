import firebase from "firebase";
import {
    Card,
    CardBody,
    CardHeader
} from "../../../../_metronic/_partials/controls";
import React from "react";

export default function InfoPage() {
    const firebaseApp = firebase.apps[0];
    return (
        <Card>
            <CardHeader title="Info"/>
            <CardBody>
                <div>
                    <h1>React & Firebase</h1>
                    <code>
                        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
                    </code>
                </div>
            </CardBody>
        </Card>
    );
}