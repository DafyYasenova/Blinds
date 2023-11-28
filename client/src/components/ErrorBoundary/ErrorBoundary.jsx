import { Component } from "react";
import { Navigate } from "react-router-dom";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        console.log('GetDeriverStateFromError');
        return {
            hasError: true,
        }
    } 

    render() {
        if (this.state.hasError) {
            return <Navigate to="/404" />
        }
        return this.props.children;

    }
}