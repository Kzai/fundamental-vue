import { ExampleCollectionFunction } from '../types';

export const plugin: ExampleCollectionFunction = () => {
    return { status: 'inprogress', icon: 'action', related: ['FdActionBar'] };
};
