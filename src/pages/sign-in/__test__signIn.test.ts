import { faker } from '@faker-js/faker';
import { expect, test, describe, beforeEach } from '@jest/globals';
import { z } from 'zod';

let userName: string;
let userPassword: string;

beforeEach(() => {
    userName = faker.person.fullName();
    userPassword = faker.internet.password();
});

describe('signIn form test', () => {
    test('1', () => {
        expect(userPassword).toBe('kb7JGC6WqqPqkvf');
    });
});
