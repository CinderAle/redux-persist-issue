import { Component } from 'react';

type State = {
    error: string;
};

export class ErrorBoundary extends Component {
    override state: State;

    constructor() {
        super({});
        this.state = { error: '' };
    }

    public static getDerivedStateFromError(error: Error) {
        return { error: error.message };
    }

    public override render() {
        return <div>{this.state.error}</div>;
    }
}
