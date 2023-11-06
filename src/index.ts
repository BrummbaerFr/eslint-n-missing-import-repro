import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

const getHelloWorld = () => ("Hello World");

export const main = () => {
    const string: GetResponseDataTypeFromEndpointMethod<typeof getHelloWorld> = "Hello World";

    console.log(string);
}