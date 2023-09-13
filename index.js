import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const repoId= getInput("RepoId");
const environmentName = getInput("EnvironmentName");
const name = getInput("Name");
const value = getInput("Value");
const ownerName = getInput("OwnerName");
const repoName = getInput("RepoName");
const token = getInput("Token");

const octokit = getOctokit(token);

const getEnvironmentVariable = async () => {

    let url = `GET /repositories/${repoId}/environments/${environmentName}/variables/${name}`

    return octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        name: name
    })
}

updateEnvironmentVariable = async () => {

    let url = `PATCH /repositories/${repoId}/environments/${environmentName}/variables/${name}`

    return this.octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        name: name,
        value: value
    })
}

const run = async () => {
    const environmentVariable = await getEnvironmentVariable();
    console.log(environmentVariable)
}

run();
