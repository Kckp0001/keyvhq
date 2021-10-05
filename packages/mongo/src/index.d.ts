// Type definitions for @keyv/mongo 1.0
// Project: https://github.com/lukechilds/keyv-mongo
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from '@keyvhq/core';
import { EventEmitter } from 'events';
import { MongoClientOptions } from 'mongodb';

export = KeyvMongo;

declare class KeyvMongo<TValue> extends EventEmitter implements Store<TValue> {
    readonly ttlSupport: false;
    namespace?: string | undefined;

    constructor(uri?: string);
    constructor(options?: KeyvMongo.Options);
    constructor(uri?: string, options?: KeyvMongo.Options);

    get(key: string): Promise<TValue | undefined>;
    set(key: string, value: TValue, ttl?: number): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
    iterator(): AsyncGenerator
}

declare namespace KeyvMongo {
    interface Options extends MongoClientOptions {
        uri?: string | undefined;
        collection?: string | undefined;
    }
}
