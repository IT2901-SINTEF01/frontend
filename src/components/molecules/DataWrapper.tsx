import React, { ReactElement } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';

/**
 * @param T The raw output of the GraphQL query.
 * @param U The parsed and mapped output. Will serve as the input to the child function.
 */
export type DataWrapperProps<T, U> = {
    query: DocumentNode;
    children: (data: U) => ReactElement;
    mappingFunction: (data: T) => U;
};

/**
 * This component is responsible for retrieving and mapping a GraphQL query to the expected input to the
 * child function. It is a generic component to support arbitrary children.
 */

const DataWrapper = <T, U>(props: DataWrapperProps<T, U>): ReactElement => {
    const { loading, error, data } = useQuery<T>(props.query);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message="Det oppsto en feil under henting av data" moreInfo={error.message} />;
    }

    if (!data) {
        return <ErrorMessage message="Ingen data mottatt fra serveren." />;
    }

    return props.children(props.mappingFunction(data));
};

export default DataWrapper;
