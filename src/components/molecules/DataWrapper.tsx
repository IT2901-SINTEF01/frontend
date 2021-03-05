import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { InlineAlert, Pane, Spinner } from 'evergreen-ui';

/**
 * @param T The raw output of the GraphQL query.
 * @param U The parsed and mapped output. Will serve as the input to the child function.
 */
export type DataWrapperProps<T, U> = {
    query: DocumentNode;
    children: (data: U) => JSX.Element;
    mappingFunction: (data: T) => U;
};

const CenterPane: React.FC = ({ children }) => {
    return (
        <Pane width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            {children}
        </Pane>
    );
};

/**
 * This component is responsible for retrieving and mapping a GraphQL query to the expected input to the
 * child function. It is a generic component to support arbitrary children.
 */

const DataWrapper = <T, U>(props: DataWrapperProps<T, U>): JSX.Element => {
    const { loading, error, data } = useQuery<T>(props.query);

    if (loading) {
        return (
            <CenterPane>
                <Spinner />
            </CenterPane>
        );
    }

    if (error) {
        return (
            <CenterPane>
                <InlineAlert intent="danger">Vi finner ikke dataen du leter etter.</InlineAlert>
            </CenterPane>
        );
    }

    if (!data) {
        return (
            <CenterPane>
                <InlineAlert intent="danger">Ingen data mottatt fra serveren.</InlineAlert>
            </CenterPane>
        );
    }

    return props.children(props.mappingFunction(data));
};

export default DataWrapper;
