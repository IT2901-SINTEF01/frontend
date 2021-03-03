import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

/**
 * @param T The raw output of the GraphQL query.
 * @param U The parsed and mapped output. Will serve as the input to the child function.
 */
export type DataWrapperProps<T, U> = {
    query: DocumentNode;
    children: (data: U) => JSX.Element;
    mappingFunction: (data: T) => U;
};

/**
 * This component is responsible for retrieving and mapping a GraphQL query to the expected input to the
 * child function. It is a generic component to support arbitrary children.
 */
const DataWrapper = <T, U>(props: DataWrapperProps<T, U>): JSX.Element => {
    const { loading, error, data } = useQuery<T>(props.query);

    if (loading) {
        return <p>Loading… ⏳</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <p>No data retrieved from backend.</p>;
    }

    return props.children(props.mappingFunction(data));
};

export default DataWrapper;
